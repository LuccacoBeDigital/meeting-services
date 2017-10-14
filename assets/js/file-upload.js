/*global $ */
function fileUpload($wrapper) {
  var $button = $wrapper.find('> button');
  var $input = $wrapper.find('> input');
  var $list = $wrapper.find('.list');
  var $clearListBtn = $list.find('button');
  
  var setFileList = function(fileName) {
    $list.removeClass('hidden');
    $list.find('b').html(fileName);
  }
  
  var clearFileList = function() {
    $list.addClass('hidden');
    $list.find('b').html('');
  };

  $button.on('click', function(e) {
    e.preventDefault();
    $input.focus().click();
  });
  
  $clearListBtn.on('click', function(e) {
    e.preventDefault();
    clearFileList();
  })
  
  $input.on('change', function() {
    var fileName = $input.val().split('\\').pop();
    setFileList(fileName);
  });
}

$(function() {
  $('.file-upload').each(function(index, elm){
    fileUpload($(elm));
  });
});
