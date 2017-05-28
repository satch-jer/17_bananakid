(function ($, Drupal) {

    Drupal.behaviors.landingheight = {
        attach: function (context, settings) {
            $('main', context).once('landingheight').each(function () {

                $(window).resize(function(){
                    var header_height = ($("header").height()) + 50;
                    var landing_height = ($(window).height()-header_height);
                    $('.layout-landing').height(landing_height);
                }).trigger('resize');
            });
        }
    };
})(jQuery, Drupal);