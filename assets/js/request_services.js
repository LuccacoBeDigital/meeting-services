/* global $ */
function setupToggleArea($area) {
  var $header = $area.find('header');
  var $section = $area.find('section');

  var $toggleButton = $header.find('> button');
  var $toggleArrow = $header.find('> a');
  var $toggleSwitch = $header.find('[data-elm]');

  $toggleSwitch.on('click', function(e) {
    e.preventDefault();
    var isClosed = $section.hasClass('hidden');
    if (isClosed) {
      $toggleArrow.find('i')
                  .removeClass('fa-chevron-down')
                  .addClass('fa-chevron-up');
    } else {
      $toggleArrow.find('i')
                  .removeClass('fa-chevron-up')
                  .addClass('fa-chevron-down');
    }
    $section.toggleClass('hidden');
    $toggleButton.toggleClass('active');
  });
}

$(function() {
  $(".toggle-area").each(function(index, elm){
    setupToggleArea($(elm));
  });
});