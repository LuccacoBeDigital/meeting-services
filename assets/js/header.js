/*eslint-env jquery*/
$(function() {

  var $headerNavToggle = $('#headerNavToggle');
  var $headerNavToggleImg = $headerNavToggle.find('img');
  var $headerNavMobile = $('#headerNavMobile');

  $headerNavToggle.on('click', function(e) {
    e.preventDefault();
    var isHidden = $headerNavMobile.hasClass('invisible');

    $headerNavMobile.toggleClass('invisible');
    $headerNavToggleImg.attr('src', '../assets/img/nav-toggle-' + (isHidden ? 'off' : 'on') + '.svg');

    $('body').css('overflow-y', isHidden ? 'hidden' : 'visible');
  })
});
