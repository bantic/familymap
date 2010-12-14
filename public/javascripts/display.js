$(document).ready(function() {
  var map;
  initFullMap();
});

function initFullMap() {
  if ($("#full_map").length) {
    var latlng = new google.maps.LatLng(0, 0);
    var myOptions = {
      zoom: 3,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("full_map"), myOptions);
  }
}

function addMarker(lat, lng) {
  var latlng = new google.maps.LatLng(lat, lng);
  marker = new google.maps.Marker({
    map:map,
    position: latlng
  });
}

