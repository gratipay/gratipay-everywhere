(function() {
    var gittipUrl = "https://www.gittip.com/";

    function isGittipUrl(url) {
        return url.indexOf(gittipUrl) != -1;
    }

    function goToGittip() {
        chrome.tabs.getAllInWindow(undefined, function(tabs) {
            for (var i = 0, tab; tab = tabs[i]; i++) {
                if (tab.url && isGittipUrl(tab.url)) {
                    chrome.tabs.update(tab.id, {selected: true});
                    return;
                }
            }
            chrome.tabs.create({url: gittipUrl});
        });
    }

    // Add listener
    chrome.browserAction.onClicked.addListener(goToGittip);

}());
