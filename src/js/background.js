(function() {
    var gittipUrl = "https://www.gittip.com/";

    function isGittipUrl(url) {
        return url.indexOf(gittipUrl) != -1;
    }

    function goToGittip() {
        // Be smart about only opening one Gittip tab on Chrome
        if (forge.is.chrome()) {
            chrome.tabs.getAllInWindow(undefined, function(tabs) {
                for (var i = 0, tab; tab = tabs[i]; i++) {
                    if (tab.url && isGittipUrl(tab.url)) {
                        chrome.tabs.update(tab.id, {selected: true});
                        return;
                    }
                }
                forge.tabs.open(gittipUrl);
            });
        } else {
            forge.tabs.open(gittipUrl);
        }
    }

    // Add listener
    forge.button.onClicked.addListener(goToGittip);

}());
