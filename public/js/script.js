document.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log("project-2 JS imported successfully!");
  },
  false
)




/* 
de 0 a 5 = #00cd67

de 10 a 20 = #42d94c

de 20 a 30 = #80e534

de 30 a 40 = #c3f118

de 40 a 50 = #fffc00
*/


//GOOGLE MAPS INIT/////////////



google.maps.event.addDomListener(window, 'load', init);

let n1=45
   


function init(){

  var map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 41.380, lng: 2.174 },
    scrollwheel: true,
    zoom: 12
  });
  
  //PARALEL-MONTJUIC DRAW---------------------//

  const paralelCoords = [
    { lat: 41.373938, lng: 2.176345 },
    { lat: 41.361643, lng: 2.171650 },
    { lat: 41.347608, lng: 2.147618 },
    { lat: 41.364733, lng: 2.135424 },
    { lat: 41.375065, lng: 2.149195 },

  ];

  if(n1 >= 0 && n1 <10){colorParalel = '#00cd67'}
  else if(n1 >= 10 && n1 <20){colorParalel = '#42d94c'}
  else if(n1 >= 20 && n1 <30){colorParalel = '#80e534'}
  else if(n1 >= 30 && n1 <40){colorParalel = '#c3f118'}
  else if(n1 >= 40 && n1 <=50){colorParalel = '#fffc00'}

  const areaParalel = new google.maps.Polygon({
    paths: paralelCoords,
    strokeColor: colorParalel,
    strokeOpacity: 0.8,
    strokeWeight: 1,
    fillColor: colorParalel,
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
    strokeColor: colorCiutatVella,
    strokeOpacity: 0.8,
    strokeWeight: 1,
    fillColor: colorCiutatVella,
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
    strokeColor: colorPoblenou,
    strokeOpacity: 0.8,
    strokeWeight: 1,
    fillColor: colorPoblenou,
    fillOpacity: 0.40,
  });

  areaPoblenou.setMap(map)


}




