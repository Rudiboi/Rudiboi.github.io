$(document).ready(function() {



    var userFeed = new Instafeed({
        get: 'user',
        userId: '1345293022',
        limit: 12,
        resolution: 'standard_resolution',
        accessToken: '1345293022.1677ed0.117234735dec4860b9a6119a72fe778f',
        sortBy: 'most-recent',
        template: '<div class="col-lg-4 instaimg"><a href="{{link}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
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