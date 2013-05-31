(function() {
    var location = window.location;

    function generateTwitter() {
        var gittip;

        var username = $('span.screen-name').text().replace('@','');
        var fullname = $('h1.fullname').text().replace('@','');


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
                url: 'https://www.gittip.com/'+username+'/public.json',
                beforeSend:function(){
                    // this is where we append a loading image
                    
                },
                success:function(data){
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
                    // If we're here, this means Gittip broke, so we should try and load the "on/twitter"

                    // Since Gittip doesn't have an API on it atm, we'll just hide the box.
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