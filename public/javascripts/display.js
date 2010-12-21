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

function addItem(item) {
  addMarker(item.latitude, item.longitude, item);
}

function addMarker(lat, lng, item) {
  var latlng = new google.maps.LatLng(lat, lng);
  marker = new google.maps.Marker({
    map:map,
    position: latlng
  });
  google.maps.event.addListener(marker, 'click', function() {
    revealItem(item);
  });
}

function revealItem(item) {
  console.log("reveal item: " + item);
  var item = $("#item" + item.id);
  Shadowbox.open({
    content: item.html(),
    player: 'html',
    height: 1000,
    width: 1000
  });
}

