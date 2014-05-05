var twitter = function() {
    function generateTwitter() {
        var gittip;

        var username = $('link[rel="canonical"]').attr('href').replace('https://twitter.com/','');
        var fullname = $('title').text().replace(' ('+username+') on Twitter','');

        // Setup the box areas
        var $profileBox = $('.profile-nav').parent();
        var $gittipBox = document.createElement('div');
        $gittipBox.id = 'gittip';

        $profileBox.append($gittipBox);

        // Firefox can't deal with external template files
        var template = [];
        template.push('<div class="module component" data-component-term="profile_gittip">');
        template.push('    <div class="profile-gittip-box flex-module">');
        template.push('        <div class="loading">');
        template.push('            <h2>Loading...</h2>');
        template.push('        </div>');
        template.push('        <div class="loaded">');
        template.push('            <div class="gittip-box-title">');
        template.push('                <h2>{{FULLNAME}} On Gittip!</h2>');
        template.push('            </div>');
        template.push('            <br>');
        template.push('            <div class="giving-receiving">');
        template.push('                <h2 class="pad-sign"><a href="https://www.gittip.com/on/twitter/{{USERNAME}}">{{USERNAME}}</a> receives</h2>');
        template.push('                <div class="number">${{RECEIVE}}</div>');
        template.push('                <div class="unit pad-sign">per week, and gives $<span class="total-giving">{{GIVING}}</span></div>');
        template.push('            </div>');
        template.push('        </div>');
        template.push('    </div>');
        template.push('</div>');

        var widget = template.join("\n");

        $("#gittip").html(widget);

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
    }

    generateTwitter();

};

$(document).ready(twitter);

