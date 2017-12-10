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
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('have a url', function() {
            allFeeds.forEach(function(feed) {
                const url = feed.url;
                expect(url).toBeDefined();
                expect(url).not.toBeNull();
                expect(url).not.toEqual('');
            });
         });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('have a name', function() {
            allFeeds.forEach(function(feed) {
                const name = feed.name;
                expect(name).toBeDefined();
                expect(name).not.toBeNull();
                expect(name).not.toEqual('');
            });
         });
    });


    /* TODO: Write a new test suite named "The menu" */

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
    describe('The menu', function() {
        const bodyElement = $('body')[0];
        const menuIcon = $('.menu-icon-link')[0];
        let thisClass;

        it('is hidden', function() {
            thisClass = bodyElement.className;
            expect(thisClass).toContain('menu-hidden');
        });

        it('toggles when menu clicked', function() {
            menuIcon.click();
            thisClass = bodyElement.className;
            expect(thisClass).not.toContain('menu-hidden');
            menuIcon.click();
            thisClass = bodyElement.className;
            expect(thisClass).toContain('menu-hidden');
        });
    });
    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
    describe('Initial Entries', function() {
        beforeEach(function(done) {
            loadFeed(0,function() {
                done();
            });
        });
        it('are grabbed and displayed', function(done) {
            expect($('.feed .entry').length).not.toEqual(0);
            done();
        });
    });
    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
    describe('New Feed Selection', function() {
        const feedTitle = $('.header-title').html();
        const firstEntry = $('.feed .entry:first').html();

        beforeEach(function(done) {
            loadFeed(1,function() {
                done();
            });
        });

        it('changes content', function(done) {
            const newFeedTitle = $('.header-title').html();
            const newFirstEntry = $('.feed .entry:first').html();
            expect(newFeedTitle).not.toEqual(feedTitle);
            expect(newFirstEntry).not.toEqual(firstEntry);
            done();
        });
    });
}());
