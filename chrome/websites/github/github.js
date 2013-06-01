(function() {
    // Misc function for returning the HTML of a Javascript Element
    function outerHTML(node){
        return node.outerHTML || new XMLSerializer().serializeToString(node);
    }

    if (document.getElementsByClassName('pagehead-actions').length > 0) {

        // Find and create the elements we'll be using.
        var author = document.getElementsByClassName('author')[0].textContent.replace(/(^\s+|\s+$)/g,'');
        var actions = document.getElementsByClassName('pagehead-actions')[0];
        var buttonContainer = document.createElement('li');
        var button = document.createElement('a');

        // Add attributes to required containers/elements
        buttonContainer.id = 'gittip-button';

        button.className += 'button minibutton js-toggler-target starred';
        button.rel = 'nofollow payment';
        button.target = '_blank';
        button.href = 'https://www.gittip.com/on/github/'+author;
        button.innerHTML = '<span class="mini-icon mini-icon-gittip"></span> Gittip';

        // Fill the data
        buttonContainer.innerHTML = outerHTML(button); 

        // Insert our button!
        actions.insertBefore(buttonContainer, actions.firstChild);
    }
}());