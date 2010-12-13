// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
function handleUpload(upload) {
  $("#item_upload_id").val(upload.id);
  $("#item_latitude").val(upload.latitude);
  $("#item_longitude").val(upload.longitude);
  $("#item_image").attr("src", upload.image_thumbnail_url).fadeIn(1000);
}

function codeAddress() {
  var address = $("#address").val();
  var geocoder = new google.maps.Geocoder();
  geocoder.geocode({'address': address}, function(results, status) {
    var latlng = results[0].geometry.location;
    $("#item_latitude").val(latlng.lat());
    $("#item_longitude").val(latlng.lng());
  });
  return false;
}