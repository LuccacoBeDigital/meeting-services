function setupAdminFilters(){function t(){var i='<div class="col-md-4"><label for=""></label><input type="text" class="form-control" /><a href=""><i class="fa fa-times-circle"></i></a></div>';e.find("div:gt(0)").remove();for(var n=0;n<a.length;n++){var l=$(i);l.find("label").text(a[n]),l.find("a").attr("data-index",n).on("click",function(i){i.preventDefault(),a.splice(parseInt($(this).attr("data-index")),1),t()}),e.append(l)}}var i=$("#adminFiltersSelect"),e=$("#adminFiltersOutput"),a=[];i.on("change",function(){var i=$(this).val();-1===a.indexOf(i)&&i&&(a.push(i),t())})}$(function(){setupAdminFilters()});