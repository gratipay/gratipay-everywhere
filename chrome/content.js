chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
  if (!message.getTabUrl) {
    return;
  }
  chrome.runtime.sendMessage({greeting: window.location.href}, function(response) {});
});