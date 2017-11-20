/*global $ */
function setupAdminFilters() {
  var $adminFiltersSelect = $("#adminFiltersSelect"),
      $adminFiltersOutput = $("#adminFiltersOutput"),
      filters = [];

  function createFiltersList(){
    var template = '<div class="col-md-4"><label for=""></label><input type="text" class="form-control" /><a href=""><i class="fa fa-times-circle"></i></a></div>';
    $adminFiltersOutput.find("div:gt(0)").remove();
    for (var i = 0; i < filters.length; i++) {
      var $tmpl = $(template);
      $tmpl.find('label').text(filters[i]);
      $tmpl.find('a').attr('data-index', i).on('click', function(e) {
        e.preventDefault();
        filters.splice(parseInt($(this).attr('data-index')), 1);
        createFiltersList();
      });
      $adminFiltersOutput.append($tmpl);
    }
  }
  
  $adminFiltersSelect.on('change', function() {
    var value = $(this).val();
    if (filters.indexOf(value) !== -1 || !value) {
      return;
    }
    filters.push(value);
    createFiltersList();
  });
}

$(function() {
  setupAdminFilters();
});