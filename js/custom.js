$(document).ready(function() {


    var userFeed;
    userFeed = new Instafeed({
        get: 'user',
        userId: '1345293022',
        limit: 10,
        resolution: 'standard_resolution',
        accessToken: '1345293022.1677ed0.117234735dec4860b9a6119a72fe778f',
        sortBy: 'most-liked',
        template: '<div class="col-lg-4 col-md-auto col-xs-12 instaimg"><a href="{{link}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
        filter: function (image) {
            if (!(image.link === "https://www.instagram.com/p/BW0ctE3gvQB/")) {
                return true; }
            }
        });
    $("#yes").click(function() {
        $('title,html,body').animate({
            scrollTop: $("#icons").offset().top
        }, 2000);
    });

    userFeed.run();


    // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });


});