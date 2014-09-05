
var bitbucket = function() {

    var author = $('.user').children('span')[1].innerText;
    var buttonParent = $('#repo-toolbar').children('.aui-buttons')[0];

    $(buttonParent).prepend('<a id="gratipay-everywhere" class="aui-button aui-style" href="https://www.gratipay.com/'+author+'"><span class="aui-icon icon gratipay">Tip on Gratipay!</span><span>Gratipay</span></a>');

};

$(document).ready(bitbucket);
