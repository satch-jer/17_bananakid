(function ($, Drupal) {
    Drupal.behaviors.merken = {
        attach: function (context, settings) {
            $('main', context).once('merken').each(function () {
                $(document).ready(function(){
                    $(".menu li:nth-child(1) a").removeClass('is-active');

                    $(".menu li:nth-child(1) a").on("click", function(){
                        $(this).addClass('is-active');
                    });
                });
            });
        }
    };
})(jQuery, Drupal);
