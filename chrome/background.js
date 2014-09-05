(function() {
    var gratipayUrl = "https://gratipay.com/";

    function isGratipayUrl(url) {
        return url.indexOf(gratipayUrl) != -1;
    }

    function goToGratipay() {
        chrome.tabs.getAllInWindow(undefined, function(tabs) {
            for (var i = 0, tab; tab = tabs[i]; i++) {
                if (tab.url && isGratipayUrl(tab.url)) {
                    chrome.tabs.update(tab.id, {selected: true});
                    return;
                }
            }
            chrome.tabs.create({url: gratipayUrl});
        });
    }

    // Add listener
    chrome.browserAction.onClicked.addListener(goToGratipay);

}());
