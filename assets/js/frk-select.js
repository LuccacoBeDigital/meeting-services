/*global $ */
function frkSelect($wrapper) {
  var $input = $("#" + $wrapper.data('target'));
  var $placeholder = $wrapper.find(".frk-select__placeholder");
  var $list = $wrapper.find(".frk-select__list");

  function toggleVisible() {
    $list.toggleClass('frk-select__list--open');
    $list[0].scrollTo(0, 0);
    $placeholder.find('.fa')
                .toggleClass('fa-caret-down')
                .toggleClass('fa-caret-up');
  }

  $placeholder.on('click', function(e) {
    e.preventDefault();
    toggleVisible();
  });

  $list.find('div').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    $input.val($this.data('value'));
    $placeholder.find('a').text($this.find('p').text());
    toggleVisible();
  });
}

$(function() {
  $(".frk-select").each(function(index, elm){
    frkSelect($(elm));
  });
})