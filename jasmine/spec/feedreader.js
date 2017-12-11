/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    //Test the allFeeds variable is defined appropriately
    describe('RSS Feeds', function() {
        //test that allFeeds is defined and not empty
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

         //test that each index of allFeeds has a url property that is not empty
         it('have a url', function() {
            allFeeds.forEach(function(feed) {
                const url = feed.url;
                expect(url).toBeDefined();
                expect(url).not.toBeNull();
                expect(url.length).not.toBe(0);
            });
         });

         //test that each index of allFeeds has a name property that is not empty
         it('have a name', function() {
            allFeeds.forEach(function(feed) {
                const name = feed.name;
                expect(name).toBeDefined();
                expect(name).not.toBeNull();
                expect(name.length).not.toBe(0);
            });
         });
    });

    //test the visibility and toggle of the menu
    describe('The menu', function() {
        const menuIcon = $('.menu-icon-link')[0];
        let menuHidden;

        //menu should initially be hidden by assigning body the appropriate class
        it('is hidden', function() {
            menuHidden = $('body').hasClass('menu-hidden');
            expect(menuHidden).toBeTruthy();
        });

        //menu should toggle when menu is clicked
        it('toggles when menu clicked', function() {
            //trigger menu click
            menuIcon.click();
            //class should be toggled on body
            menuHidden = $('body').hasClass('menu-hidden');
            expect(menuHidden).toBeFalsy();
            //trigger menu click
            menuIcon.click();
            //class should be toggled on body
            menuHidden = $('body').hasClass('menu-hidden');
            expect(menuHidden).toBeTruthy();
        });
    });

    //test loadFeed appends .entry elements to container when complete
    describe('Initial Entries', function() {
        //loadFeed will get data and append to container
        //include done to account for async
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });

        //when done there should be more than 0 elements with .entry in .feed container
        it('are loaded and displayed', function(done) {
            expect($('.feed .entry').length).not.toBe(0);
            done();
        });
    });

    //test that loading a new feed changes content
    describe('New Feed Selection', function() {
        let feedTitle, 
            firstEntry;
        let headerTitle = $('.header-title');

        //loadFeed with a index from allFeeds
        //include done to account for async
        beforeEach(function(done) {
            loadFeed(1, function() {
                //store the name and first .entry content from first feed
                feedTitle = headerTitle.html();
                firstEntry = $('.feed .entry:first h2').html();
                //call back should trigger a second call to load feed with a different index to mimic a change
                loadFeed(0, function() {
                    done();
                })
            });
        });

        //when done the content from second feed should be different than what was loaded from first
        it('changes content', function(done) {
            //store the name and first .entry content from the second feed
            const newFeedTitle = headerTitle.html();
            const newFirstEntry = $('.feed .entry:first h2').html();
            //the title and first .entry element should be different between feeds
            expect(newFeedTitle).not.toBe(feedTitle);
            expect(newFirstEntry).not.toBe(firstEntry);
            done();
        });
    });
}());
