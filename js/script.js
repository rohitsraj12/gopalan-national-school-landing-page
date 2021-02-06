$(document).ready(function(){
    // hamberger toggle
    $(".hamberger").click(function(){
        $(".header__nav").slideToggle();
    });

    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
            var url = $('.header__brand a img');
    
        if (scroll >= 200) {
            $("#body-header").addClass("header-fixed");
            $("#body-header header").removeClass("container");
            url.attr('src', 'img/brand/logo.svg');

        } else {
            $("#body-header header").addClass("container");
            $("#body-header").removeClass("header-fixed");
            url.attr('src', 'img/brand/gns-logo.svg');
        }

        if(scroll >= 200){
          $("#fixed-button").removeClass("hide");
        } else {
          $("#fixed-button").addClass("hide");
        }
    });
})