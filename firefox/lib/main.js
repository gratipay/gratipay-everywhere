// The main module of the clone1018 Add-on.

// Modules needed are `require`d, similar to CommonJS modules.
// In this case, creating a Widget that opens a new tab needs both the
// `widget` and the `tabs` modules.
var Widget = require("widget").Widget;
var tabs = require('tabs');

exports.main = function() {

    // Widget documentation: https://addons.mozilla.org/en-US/developers/docs/sdk/latest/modules/sdk/widget.html

    new Widget({
        // Mandatory string used to identify your widget in order to
        // save its location when the user moves it in the browser.
        // This string has to be unique and must not be changed over time.
        id: "gratipay-everywhere",

        // A required string description of the widget used for
        // accessibility, title bars, and error reporting.
        label: "Gratipay Everywhere",


        // An optional string URL to content to load into the widget.
        // This can be local content or remote content, an image or
        // web content. Widgets must have either the content property
        // or the contentURL property set.
        //
        // If the content is an image, it is automatically scaled to
        // be 16x16 pixels.
        contentURL: "https://rawgithub.com/gratipay/gratipay.com/master/img-src/gratipay-logo-16.png",

        // Add a function to trigger when the Widget is clicked.
        onClick: function(event) {

            // Tabs documentation: https://addons.mozilla.org/en-US/developers/docs/sdk/latest/modules/sdk/tabs.html

            // Open a new tab in the currently active window.
            tabs.open("https://gratipay.com");

        }
    });
};
