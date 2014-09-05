(function() {
    var location = window.location;

    function generateTwitter() {
        var gratipay;

        var username = $('link[rel="canonical"]').attr('href').replace('https://twitter.com/','');
        var fullname = $('title').text().replace(' ('+username+') on Twitter','');

        console.log(username);


        //var html = load(chrome.extension.getURL('websites/twitter/widget.html'));

        // Setup the box areas
        var $profileBox = $('.profile-nav').parent();
        var $gratipayBox = document.createElement('div');
        $gratipayBox.id = 'gratipay';

        $profileBox.append($gratipayBox);

        // Let's "create" our new box.
        $('#gratipay').load(chrome.extension.getURL('websites/twitter/widget.html'), function(widget) {

            $.ajax({
                type: 'GET',
                url: 'https://gratipay.com/on/twitter/'+username+'/public.json',
                beforeSend:function(){
                    // this is where we append a loading image

                },
                success:function(data){
                    // stop here if they aren't on Gratipay
                    if (data.on != 'gratipay')
                        return this.error(data);

                    // successful request; do something with the data
                    gratipay = data;

                    widget = widget.replace('{{RECEIVE}}', gratipay.receiving);
                    widget = widget.replace('{{GIVING}}', gratipay.giving);
                    widget = widget.replace('{{FULLNAME}}', fullname);
                    widget = widget.replace('{{USERNAME}}', username);
                    widget = widget.replace('{{USERNAME}}', username);

                    $('#gratipay').html(widget);

                    if (gratipay.giving && gratipay.receiving)
                        $('#gratipay .giving-receiving').show();
                    else if (gratipay.giving)
                        $('#gratipay .giving').show();
                    else if (gratipay.receiving)
                        $('#gratipay .receiving').show();
                    else
                        $('#gratipay .neither').show();

                    $('.loading').hide();
                    $('.loaded').show();
                },
                error: function(data){
                    console.log(data);
                    // for now just hide it all, but we should check to see if they exist, and
                    // are just not on Gratipay, or if we're getting a 404
                    $('#gratipay').hide();

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
