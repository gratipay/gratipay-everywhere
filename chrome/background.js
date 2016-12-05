(function() {
    var gratipayUrl = "https://gratipay.com/";
    var githubUrl = "https://github.com/";
    var twitterUrl = "https://twitter.com/";
    var bitbucketUrl = "https://bitbucket.org/";
    
    function isGratipayUrl(url) {
        return url.indexOf(gratipayUrl) == 0;
    }
    
    chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
        var currentUrl = message.greeting;
        if (!currentUrl) {
            return;
        }
        var gratipayUrlOfAuthor = gratipayUrl;
        if (currentUrl.indexOf(githubUrl) != -1) {
            gratipayUrlOfAuthor += 'on/github/' + getAuthor(githubUrl, currentUrl);
        } else if (currentUrl.indexOf(twitterUrl) != -1) {
            gratipayUrlOfAuthor += 'on/twitter/' + getAuthor(twitterUrl, currentUrl);
        } else if (currentUrl.indexOf(bitbucketUrl) != -1) {
            gratipayUrlOfAuthor += getAuthor(bitbucketUrl, currentUrl)
        }
        chrome.tabs.create({url: gratipayUrlOfAuthor});
    });

    function getAuthor(prefix, url) {
        var afterPrefix = "";
        if (url.indexOf(prefix) == 0 && url.length > prefix.length) {
            afterPrefix = url.substring(prefix.length);
        }
        return afterPrefix.indexOf("/") == -1 ? afterPrefix : afterPrefix.substring(0, afterPrefix.indexOf("/"))
    }

    function goToGratipay() {
        chrome.tabs.getAllInWindow(undefined, function(tabs) {
            for (var i = 0, tab; tab = tabs[i]; i++) {
                if (tab.url) {
                    if (isGratipayUrl(tab.url)) {
                        chrome.tabs.update(tab.id, {selected: true});
                        return;
                    }
                }
            }
        });
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {getTabUrl: true}, function(response) {
            });
        });
    }

    // Add listener
    chrome.browserAction.onClicked.addListener(goToGratipay);

}());
