// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
function handleUpload(upload) {
  $("#item_upload_id").val(upload.id);
  handleLatLng(upload.exif_latitude, upload.exif_longitude);
  $("#item_image").attr("src", upload.image_thumbnail_url).fadeIn(1000);
  $("#upload_area").hide();
}

function codeAddress() {
  var address = $("#address").val();
  var geocoder = new google.maps.Geocoder();
  geocoder.geocode({'address': address}, function(results, status) {
    var latlng = results[0].geometry.location;
    handleLatLng(latlng.lat(), latlng.lng());
  });
  return false;
}

function handleLatLng(lat, lng) {
  $("#item_latitude").val(lat);
  $("#item_longitude").val(lng);
  
  initMap(lat, lng);
}

function initMap(lat, lng) {
  if (!lat || !lng) {
    return false;
  } else {
    var zoom = 8;
  }
  var latlng = new google.maps.LatLng(lat, lng);
  var myOptions = {
    zoom: zoom,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
  marker = new google.maps.Marker({
    map:map,
    draggable:true,
    animation: google.maps.Animation.DROP,
    position: latlng
  });
  
  $("#address_area").hide();
  $("#change_address_area").show();
  
  google.maps.event.addListener(marker, 'position_changed', function() {
    $("#item_latitude").val(this.getPosition().lat());
    $("#item_longitude").val(this.getPosition().lng());
  });
}

$(document).ready(function() {
  $(".family_member").click(function() {
    if ( $(this).hasClass("selected") ) {
      $(this).removeClass("selected");
      var family_members = $("#item_family_members").data("family_members") || [];
      var valueToRemove = $(this).attr("id");
      var new_family_members = $.grep(family_members, function(val) { return val != valueToRemove; });
      $("#item_family_members").data("family_members", new_family_members);
    } else {
      console.log("HI");
      var family_members = $("#item_family_members").data("family_members") || [];
      family_members.push($(this).attr("id"));
      $("#item_family_members").data("family_members", family_members);
      $(this).addClass("selected");
    }
    $("#item_family_members").val( $("#item_family_members").data("family_members") );
  });
  
  $("#new_item").submit(function() {
    var error = false;
    var error_text = "";
    if ( ($("#item_latitude").val == "") || ($("#item_longitude").val() == "")) {
      error = true;
      error_text = error_text + "No address has been entered\n";
    }
    
    if ( ($("#item_description").val() == "") ) {
      error = true;
      error_text = error_text + "No description has been entered\n";
    }
    
    if (error) {
      alert(error_text);
      return false;
    } else {
      return true;
    }
  });
  
  $("#change_address_area").click(function() {
    $("#change_address_area").hide();
    $("#address_area").show();
  });
});