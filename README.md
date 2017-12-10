# FeedReader Testing

This project utilizes the Jasmine library to impliment tests against an existing feedreader project.


## Background

This project was developed for the Udacity Front-End Web Developer Nanodegree.

## How to run Application

1. Open index.html in a browser.
2. Review the application files CSS (**./css/style.css**) and JavaScript (**./js/app.js**).
3. If you are not familiar with Jasime review the [Jasmine documentation](http://jasmine.github.io).
4. Review the spec file for Jasmine (**./jasmine/spec/feedreader.js**) and see Jasmine dependencies below.
5. At the bottom of the page you will see the Results of the Jasmine test suites.
6. You will see test suites for RSS Feeds, The menu, Initial Entries and New Feed Selection.
	- RSS Feeds: tests that `allFeeds` variable is defined with objects that include a url and name property.
	- The menu: tests that the links menu is initially hidden and toggled when the menu icon is clicked.
	- Initial Entries: tests that entries are loaded and displayed on initial load.
	- New Feed Selections: tests that when a new feed is selected the new entries are loaded.
7. Jasmine should display the number of specs and 0 failures.
8. Try breaking some tests by modifying the app.
9. Modify the `allFields` variable in (**.js/app.js**) setting one of the name or url properties to an empty string.
10. Reload the page and you will now see a failure.
11. Keep on breaking and testing.


## Jasmine Dependency
- Jasmine 2.1.2
   - CSS and js files should be linked as follows:
```Javascript
	//head
    <link rel="stylesheet" href="jasmine/lib/jasmine-2.1.2/jasmine.css">

    <script src="jasmine/lib/jasmine-2.1.2/jasmine.js"></script>
    <script src="jasmine/lib/jasmine-2.1.2/jasmine-html.js"></script>
    <script src="jasmine/lib/jasmine-2.1.2/boot.js"></script>
    
	//at end of body
	<script src="jasmine/spec/feedreader.js"></script>
```