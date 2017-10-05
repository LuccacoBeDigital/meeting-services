/*eslint-env jquery*/
$(function() {

  var $headerDropdown = $('.headerDropdown');
  var $headerDropdownToggle = $('.headerDropdownToggle');

  function hasClickedOutside() {
    $headerDropdown.addClass('hidden');
    $(window).off('click', hasClickedOutside);
  }
  
  $headerDropdownToggle.on('click', function(event) {
    event.stopPropagation();
    event.preventDefault();
    if ($headerDropdown.hasClass('hidden')) {
      $(window).on('click', hasClickedOutside);
      $headerDropdown.removeClass('hidden');
    } else {
      hasClickedOutside();
    }
  });

  // enable tooltips
  $('[data-toggle="tooltip"]').tooltip();
});