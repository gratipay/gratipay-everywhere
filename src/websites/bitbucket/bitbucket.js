
var bitbucket = function() {

	var author = $('.user').children('span')[1].innerText;
	var buttonParent = $('#repo-toolbar').children('.aui-buttons')[0];

	$(buttonParent).append('<a id="gittip-button" class="aui-button" href="https://www.gittip.com/'+author+'"><span class="aui-icon aui-icon-small aui-iconfont-gittip"></span><span>Gittip</span></a>');

};

$(document).ready(bitbucket);
