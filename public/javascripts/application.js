// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
function handleUpload(upload) {
  $("#item_upload_id").val(upload.id);
  $("#item_image").attr("src", upload.image_thumbnail_url).fadeIn(1000);
}