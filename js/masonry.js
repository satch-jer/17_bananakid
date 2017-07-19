/**
 * Created by jerbartels on 24/06/2017.
 */
/**
 * @file
 * Placeholder file for custom sub-theme behaviors.
 *
 */
(function ($, Drupal) {

    /**
     * Example drupal behavior
     */
    Drupal.behaviors.masonry = {
        attach: function (context, settings) {
            $(window).load(function(){
                $('.block-views-blockrecent-photos-block-1, .view-id-filter_articles>.view-content', context).once('masonry').each(function () {
                    $(this).masonry({
                        columnWidth: '.views-row, .field__item',
                        itemSelector: '.views-row, .field__item',
                        horizontalOrder: true,
                        gutter: 0,
                        percentPosition: true
                    });
                });
            });
        }
    };

})(jQuery, Drupal);