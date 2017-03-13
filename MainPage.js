$(function() {
  $('[data-sliding-nav]').each(function() {
    var slider = $('<div class="slider"></div>');
    $(this).append(slider);
    var links = $(this).find('a');
    links.each(function(index) {
       $(this).hover(function() {
         slider.css('margin-left', (($(this).position().left + $(this).outerWidth(true) / 2) - slider.width() / 2) + 'px');
       });
    });

    slider.css('margin-left', (($(links[0]).position().left + $(links[0]).outerWidth(true) / 2) - slider.width() / 2) + 'px');
  });
});
