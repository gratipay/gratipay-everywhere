(function() {
    var location = window.location;

    function generateTwitter() {
        var gittip;

        var username = $('link[rel="canonical"]').attr('href').replace('https://twitter.com/','');
        var fullname = $('title').text().replace(' ('+username+') on Twitter','');

        console.log(username);


        //var html = load(chrome.extension.getURL('websites/twitter/widget.html'));

        // Setup the box areas
        var $profileBox = $('.profile-nav').parent();
        var $gittipBox = document.createElement('div');
        $gittipBox.id = 'gittip';

        $profileBox.append($gittipBox);

        // Let's "create" our new box.
        $('#gittip').load(chrome.extension.getURL('websites/twitter/widget.html'), function(widget) {

            $.ajax({
                type: 'GET',
                url: 'https://www.gittip.com/on/twitter/'+username+'/public.json',
                beforeSend:function(){
                    // this is where we append a loading image
                    
                },
                success:function(data){
                    // stop here if they aren't on Gittip
                    if (data.on != 'gittip')
                        return this.error(data);

                    // successful request; do something with the data
                    gittip = data;

                    widget = widget.replace('{{RECEIVE}}', gittip.receiving);
                    widget = widget.replace('{{GIVING}}', gittip.giving);
                    widget = widget.replace('{{FULLNAME}}', fullname);
                    widget = widget.replace('{{USERNAME}}', username);
                    widget = widget.replace('{{USERNAME}}', username);

                    $('#gittip').html(widget);
                    $('.loading').hide();
                    $('.loaded').show();
                },
                error: function(data){
                    console.log(data);
                    // for now just hide it all, but we should check to see if they exist, and
                    // are just not on Gittip, or if we're getting a 404
                    $('#gittip').hide();

                }
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
