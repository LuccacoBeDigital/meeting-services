/*eslint-env jquery*/
$(function() {

  var $headerDropdown = $('.headerDropdown');
  var $headerDropdownToggle = $('.headerDropdownToggle');

  function hasClickedOutside() {
    $headerDropdown.addClass('invisible');
    $(window).off('click', hasClickedOutside);
  }
  
  $headerDropdownToggle.on('click', function(event) {
    event.stopPropagation();
    event.preventDefault();
    if ($headerDropdown.hasClass('invisible')) {
      $(window).on('click', hasClickedOutside);
      $headerDropdown.removeClass('invisible');
    } else {
      hasClickedOutside();
    }
  });

  // enable tooltips
  $('[data-toggle="tooltip"]').tooltip();

  // date pickers
  $('.datepicker').datetimepicker({
    format: 'mm/dd/yy',
    minView: 2,
    autoclose: true
  });
  $('.timepicker').datetimepicker({
    format: 'hh:ii',
    startView: 1,
    maxView: 1,
    autoclose: true
  });

  function setupToggleArea($area) {
    var $header = $area.find('> header');
    var $section = $area.find('> section');

    var $toggleButton = $header.find('> button');
    var $toggleArrow = $header.find('> a');
    var $toggleSwitch = $header.find('[data-elm]');

    $toggleSwitch.on('click', function(e) {
      e.preventDefault();
      var isClosed = $section.hasClass('invisible');
      if (isClosed) {
        $toggleArrow.find('i')
                    .removeClass('fa-chevron-down')
                    .addClass('fa-chevron-up');
      } else {
        $toggleArrow.find('i')
                    .removeClass('fa-chevron-up')
                    .addClass('fa-chevron-down');
      }
      $section.toggleClass('invisible');
      $toggleButton.toggleClass('active');
    });
  }

  $(".toggle-area").each(function(index, elm){
    setupToggleArea($(elm));
  });

  // alerts
  function setupNotificationAlerts($elm) {
    $elm.find('.close').on('click', function(e) {
      e.preventDefault();
      $elm.toggleClass('invisible');
    });
  }

  $(".na-alert").each(function(index, elm) {
    setupNotificationAlerts($(elm));
  })
});
