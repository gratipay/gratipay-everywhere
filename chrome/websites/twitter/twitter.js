(function() {
    var location = window.location;

    function generateTwitter() {
        var gittip;

        var username = $('span.screen-name').text().replace('@','');
        var fullname = $('h1.fullname').text().replace('@','');


        //var html = load(chrome.extension.getURL('websites/twitter/widget.html'));

        // Setup the box areas
        var profileBox = $('.profile-nav').parent();
        var gittipBox = document.createElement('div');
        gittipBox.id = 'gittip';

        profileBox.append(gittipBox);

        // Let's "create" our new box.
        $('#gittip').load(chrome.extension.getURL('websites/twitter/widget.html'), function(widget) {
            $.get('https://www.gittip.com/'+username+'/public.json', function(data) {
                gittip = data;
                console.log(data);
                
                widget = widget.replace('{{RECEIVE}}', gittip.receiving);
                widget = widget.replace('{{GIVING}}', gittip.giving);
                widget = widget.replace('{{FULLNAME}}', fullname);
                widget = widget.replace('{{USERNAME}}', username);
                widget = widget.replace('{{USERNAME}}', username);

                $('#gittip').html(widget);
                $('.loading').hide();
                $('.loaded').show();
            });
        });

    }

    generateTwitter();

    /*
    window.setTimeout(function() {
        var cLocation = window.location;
        if(location.pathname != cLocation.pathname) {
            generateTwitter();
        }
    }, 1000);
*/
}());