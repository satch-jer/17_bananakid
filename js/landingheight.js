(function ($, Drupal) {

    Drupal.behaviors.landingheight = {
        attach: function (context, settings) {
            $('main', context).once('landingheight').each(function () {

                $(window).resize(function(){
                    var header_height = ($("header").height()) + 50;
                    var landing_height = ($(window).height()-header_height);
                    $('.layout-landing').height(landing_height);
                }).trigger('resize');

                $('.block-page-title-block, #scroll_down').on("click", function(){
                    $('html, body').animate({
                        scrollTop: $(".layout-content").offset().top
                    }, 500);
                });
            });
        }
    };
})(jQuery, Drupal);