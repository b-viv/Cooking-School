async function initMap() {

  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  const map = new Map(document.getElementById("map"), {
    center: { lat: 47.552689, lng: 19.072796 },
    zoom: 15,
    mapId: '7238c4fbd6b40fe7',
  });

  const iconImage = document.createElement("img");
  iconImage.src = "assets/images/map_marker.png";
  iconImage.style.width = "100px";
  iconImage.style.height = "100px";

  const marker = new AdvancedMarkerElement({
    map,
    position: { lat: 47.552689, lng: 19.072796 },
    title: "Cooking School",
    content: iconImage, 
  });

}

window.initMap = initMap;

