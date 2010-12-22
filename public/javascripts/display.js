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
      mapTypeId: google.maps.MapTypeId.TERRAIN,
      mapTypeControl: false,
      streetViewControl: false
    };
    map = new google.maps.Map(document.getElementById("full_map"), myOptions);
  }
}

function nextItem() {
  if (next_item_id >= map_items.length) {
    next_item_id = 0;
  }
  var the_item = map_items[next_item_id];
  next_item_id = next_item_id + 1;
  
  map.setZoom(7);
  map.panTo( new google.maps.LatLng(the_item.latitude, the_item.longitude ) );
  setTimeout( function() {revealItem(the_item)}, 1000);
  
  // console.log("the next item descr: " + the_item.description);
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
  
  var width = page_width * 0.9;
  var height = page_height * 0.9;
  
  // console.log("opeining with width: " + width + ", height: " + height);
  
  Shadowbox.open({
    content: item_div.html(),
    player: 'html',
    height: height,
    width: width
  });
}

