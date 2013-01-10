/*
,
{
	"js": [ "websites/twitter.js" ],
	"matches": [ "https://twitter.com/*" ]
}
*/
// Get the username
// @TODO: fallback and testing
var title = document.title.match(/[^()]+/g);
var username = title[1];

var dashboard = document.getElementsByClassName('dashboard')[0];
var tweetBox = document.getElementsByClassName('profile-tweet-box')[0].parentNode;

var newBox = document.createElement('div');

var newBoxContents = '<div class="module component" data-component-term="profile_gittip">' +
'<div class="profile-gittip-box flex-module" data-screen-name="whit537">' +
'<div class="gittip-box-title">' +
  '<h2>Tip Chad Whitacre With Gittip!</h2>' +
'</div>' +
'<p>Gittip is a way to give small weekly cash gifts to people you love and are inspired by.</p>' + 
'<span class="gittip-0001" gittip-username="whit537">' +
'</span>' +
'<script id="gittip-0001" src="https://www.gittip.com/assets/widgets/0001.js">' +
'</script>' +
'</div>' +
'</div>';

newBox.innerHTML = newBoxContents;

dashboard.insertBefore(newBox, tweetBox);



/*

var author = document.getElementsByClassName('author')[0].textContent.replace(/(^\s+|\s+$)/g,'');
var actions = document.getElementsByClassName('pagehead-actions')[0];
var button = document.createElement('li');




button.innerHTML = '<iframe style="border: 0; margin: 0; padding: 0;" src="https://www.gittip.com/' + author + '/widget.html" width="48pt" height="20pt"></iframe>';
actions.insertBefore(button, actions.firstChild);
*/
