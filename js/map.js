function initMap() {
  let map;

  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 47.552689, lng: 19.072796 },
    zoom: 15,
    mapId: '7238c4fbd6b40fe7',
  });

  new google.maps.Marker({
    position: { lat: 47.552689, lng: 19.072796 }, map,
    title: "Cooking Scool",
    icon: {
      url: "assets/images/map_marker.png",
      scaledSize: new google.maps.Size(100, 100)
    }
  });
}

window.initMap = initMap;

