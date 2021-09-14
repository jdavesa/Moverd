/* document.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log("project-2 JS imported successfully!");
  },
  false
) */



//GOOGLE MAPS INIT/////////////





google.maps.event.addDomListener(window, 'load', init);

let n1 = document.getElementById("n1").innerText
let n2 = document.getElementById("n2").innerText
let n3 = document.getElementById("n3").innerText

function init(){


  var map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 41.380, lng: 2.174 },
    scrollwheel: true,
    zoom: 12
  });

  function colorLevel(n){
    if(n >= 0 && n <10){return '#00cd67'}
    else if(n >= 10 && n <20){return '#42d94c'}
    else if(n >= 20 && n <30){return '#80e534'}
    else if(n >= 30 && n <40){return '#c3f118'}
    else if(n >= 40 && n <=50){return '#fffc00'}
  }
  
  //PARALEL-MONTJUIC DRAW---------------------//

  const paralelCoords = [
    { lat: 41.373938, lng: 2.176345 },
    { lat: 41.361643, lng: 2.171650 },
    { lat: 41.347608, lng: 2.147618 },
    { lat: 41.364733, lng: 2.135424 },
    { lat: 41.375065, lng: 2.149195 },

  ];
  
  const areaParalel = new google.maps.Polygon({
    paths: paralelCoords,
    strokeColor: colorLevel(n1),
    strokeOpacity: 0.8,
    strokeWeight: 1,
    fillColor: colorLevel(n1),
    fillOpacity: 0.40,
  });

  areaParalel.setMap(map)

  //CIUTAT VELLA---------------------//

  const ciutatVellaCoords = [
    { lat: 41.375065, lng: 2.149195 },
    { lat: 41.373938, lng: 2.176345 },
    { lat: 41.385642, lng: 2.185830 },
    { lat: 41.388164, lng: 2.182476 },
    { lat: 41.388639, lng: 2.183039 },
    { lat: 41.394801, lng: 2.175473 },
  ];

  const areaCiutatVella = new google.maps.Polygon({
    paths: ciutatVellaCoords,
    strokeColor: colorLevel(n2),
    strokeOpacity: 0.8,
    strokeWeight: 1,
    fillColor: colorLevel(n2),
    fillOpacity: 0.40,
  });

  areaCiutatVella.setMap(map)

  //POBLENOU---------------------//

  const poblenouCoords = [
    { lat: 41.388639, lng: 2.183039 },
    { lat: 41.394801, lng: 2.175473 },
    { lat: 41.419570, lng: 2.208414 },
    { lat: 41.407717, lng: 2.224760 },
    { lat: 41.403434, lng: 2.215692 },
    { lat: 41.384494, lng: 2.196097 },
    { lat: 41.391578, lng: 2.186826 },
  
  ];

  const areaPoblenou = new google.maps.Polygon({
    paths: poblenouCoords,
    strokeColor: colorLevel(n3),
    strokeOpacity: 0.8,
    strokeWeight: 1,
    fillColor: colorLevel(n3),
    fillOpacity: 0.40,
  });

  areaPoblenou.setMap(map)
}




