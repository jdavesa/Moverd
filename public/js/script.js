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
let n4 = document.getElementById("n4").innerText
let n5 = document.getElementById("n5").innerText
let n6 = document.getElementById("n6").innerText


function init(){


  var map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 41.380, lng: 2.174 },
    scrollwheel: true,
    disableDefaultUI: true,
    zoom: 12,
    styles: [
      {
          "featureType": "administrative",
          "elementType": "labels.text.fill",
          "stylers": [
              {
                  "color": "#444444"
              }
          ]
      },
      {
          "featureType": "landscape",
          "elementType": "all",
          "stylers": [
              {
                  "color": "#f2f2f2"
              }
          ]
      },
      {
          "featureType": "landscape.natural",
          "elementType": "labels.text",
          "stylers": [
              {
                  "color": "#000000"
              }
          ]
      },
      {
          "featureType": "landscape.natural",
          "elementType": "labels.text.fill",
          "stylers": [
              {
                  "color": "#656565"
              }
          ]
      },
      {
          "featureType": "landscape.natural",
          "elementType": "labels.text.stroke",
          "stylers": [
              {
                  "color": "#ffffff"
              }
          ]
      },
      {
          "featureType": "poi",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "poi.park",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "visibility": "on"
              },
              {
                  "color": "#c2ebaf"
              }
          ]
      },
      {
          "featureType": "poi.park",
          "elementType": "labels.text",
          "stylers": [
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "all",
          "stylers": [
              {
                  "saturation": -100
              },
              {
                  "lightness": 45
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "visibility": "on"
              },
              {
                  "color": "#ffffff"
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "geometry.stroke",
          "stylers": [
              {
                  "visibility": "on"
              },
              {
                  "color": "#e1e1e1"
              }
          ]
      },
      {
          "featureType": "road.highway",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "visibility": "on"
              },
              {
                  "color": "#ffffff"
              }
          ]
      },
      {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [
              {
                  "visibility": "on"
              },
              {
                  "color": "#e2e2e2"
              }
          ]
      },
      {
          "featureType": "road.arterial",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "visibility": "on"
              },
              {
                  "color": "#ffffff"
              }
          ]
      },
      {
          "featureType": "road.arterial",
          "elementType": "geometry.stroke",
          "stylers": [
              {
                  "visibility": "on"
              },
              {
                  "color": "#e1e1e1"
              }
          ]
      },
      {
          "featureType": "road.arterial",
          "elementType": "labels.icon",
          "stylers": [
              {
                  "visibility": "off"
              },
              {
                  "saturation": "0"
              }
          ]
      },
      {
          "featureType": "road.local",
          "elementType": "geometry.stroke",
          "stylers": [
              {
                  "visibility": "on"
              },
              {
                  "color": "#e1e1e1"
              }
          ]
      },
      {
          "featureType": "road.local",
          "elementType": "labels.icon",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "transit",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "water",
          "elementType": "all",
          "stylers": [
              {
                  "color": "#46bcec"
              },
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "water",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "visibility": "on"
              },
              {
                  "saturation": "0"
              },
              {
                  "color": "#aadaff"
              }
          ]
      }
  ]
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

  const contentString = "<h1>"+n1+"</h1>";

  const infowindow = new google.maps.InfoWindow({
    content: contentString,
  });
  const marker = new google.maps.Marker({
    position:  {lat: 41.367608, lng: 2.157618},
    icon: {
      path: google.maps.SymbolPath.CIRCLE,
      fillColor: 'whiteSmoke',
      fillOpacity: 0.6,
      strokeColor: 'darkSlateGrey',
      strokeWeight: 1,
      rotation: 0,
      scale: 7,
    /* anchor: new google.maps.Point(15, 30), */
      },
      draggable: true,
      map: map,
  });

  areaParalel.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
      shouldFocus: false,
    });
  });

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

  //BARCELONETA---------------------//

  const barcelonetaCoords = [

    { lat: 41.391578, lng: 2.186826 },
    { lat: 41.384494, lng: 2.196097 },
    { lat: 41.373406, lng: 2.189426 },
    { lat: 41.369605, lng: 2.189276 },
    { lat: 41.369302, lng: 2.191160 },
    { lat: 41.367270, lng: 2.189795 },
    { lat: 41.367648, lng: 2.187478 },
    { lat: 41.376810, lng: 2.187679 },
    { lat: 41.380376, lng: 2.186447 },
    { lat: 41.381660, lng: 2.182686 },
    { lat: 41.385642, lng: 2.185830 },
    { lat: 41.388164, lng: 2.182476 },
  
  ];

  const areaBarceloneta = new google.maps.Polygon({
    paths: barcelonetaCoords,
    strokeColor: colorLevel(n4),
    strokeOpacity: 0.8,
    strokeWeight: 1,
    fillColor: colorLevel(n4),
    fillOpacity: 0.40,
  });

  areaBarceloneta.setMap(map)

  //EIXAMPLE---------------------//

  const eixampleCoords = [

    
    { lat: 41.375229, lng: 2.149359 },
    { lat: 41.380836, lng: 2.142163 },
    { lat: 41.392763, lng: 2.144473 },
    { lat: 41.403336, lng: 2.186883 },
   
  
  ];

  const areaEixample = new google.maps.Polygon({
    paths: eixampleCoords,
    strokeColor: colorLevel(n4),
    strokeOpacity: 0.8,
    strokeWeight: 1,
    fillColor: colorLevel(n4),
    fillOpacity: 0.40,
  });

  areaEixample.setMap(map)

  //EIXAMPLE---------------------//

  const sagradaCoords = [

    
    
    { lat: 41.395584, lng: 2.155636 },
    { lat: 41.403336, lng: 2.186883 },
    { lat: 41.423586, lng: 2.186934 },
    { lat: 41.434030, lng: 2.179341 },
    { lat: 41.431805, lng: 2.177433 },
    { lat: 41.418360, lng: 2.176155 },
    { lat: 41.411763, lng: 2.165252 },
    { lat: 41.412541, lng: 2.159416 },
    { lat: 41.406764, lng: 2.149538 },
    { lat: 41.400608, lng: 2.151046 },
   
   
  
  ];

  const areaSagrada = new google.maps.Polygon({
    paths: sagradaCoords,
    strokeColor: colorLevel(n5),
    strokeOpacity: 0.8,
    strokeWeight: 1,
    fillColor: colorLevel(n5),
    fillOpacity: 0.40,
  });

  areaSagrada.setMap(map)


  //EIXAMPLE---------------------//

  const pastorCoords = [

   
    { lat: 41.403336, lng: 2.186883 },
    { lat: 41.423586, lng: 2.186934 },
    { lat: 41.434030, lng: 2.179341 },
    { lat: 41.439536, lng: 2.181951 },
    { lat: 41.443318, lng: 2.186519 },
    { lat: 41.456455, lng: 2.188523 },
    { lat: 41.442423, lng: 2.208131 },
    { lat: 41.427480, lng:  2.219230 },
    
   
  
  ];

  const areaPastor = new google.maps.Polygon({
    paths: pastorCoords,
    strokeColor: colorLevel(n6),
    strokeOpacity: 0.8,
    strokeWeight: 1,
    fillColor: colorLevel(n6),
    fillOpacity: 0.40,
  });

  areaPastor.setMap(map)




}




