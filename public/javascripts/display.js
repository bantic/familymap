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
  var item_div = $("#item" + item.id);
  var image = item_div.find(".item_inner");
  
  var page_width = $(document).width();
  var page_height = $(document).height();
  var image_width   = image.width();
  var image_height  = image.height();
  
  // console.log("page width: " + page_width + ", page height: " + page_height + ", image width: " + image_width + ", image height: " + image_height);
  
  var width = image_width + 20;
  var height = image_height + 20;
  
  Shadowbox.open({
    content: item_div.html(),
    player: 'html',
    height: height,
    width: width
  });
}

