
var map;
function initMap(){
  var styledMapType = new google.maps.StyledMapType(
    [
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#212121"
          }
        ]
      },
      {
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#212121"
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#757575"
          },
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative.country",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "saturation": 5
          },
          {
            "lightness": -40
          }
        ]
      },
      {
        "featureType": "administrative.country",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "visibility": "simplified"
          }
        ]
      },
      {
        "featureType": "administrative.country",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          },
          {
            "saturation": -5
          },
          {
            "lightness": -40
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#bdbdbd"
          }
        ]
      },
      {
        "featureType": "administrative.neighborhood",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative.neighborhood",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "visibility": "simplified"
          }
        ]
      },
      {
        "featureType": "administrative.neighborhood",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "simplified"
          }
        ]
      },
      {
        "featureType": "landscape.natural.terrain",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "lightness": -45
          },
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "poi",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#181818"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#1b1b1b"
          }
        ]
      },
      {
        "featureType": "road",
        "stylers": [
          {
            "visibility": "simplified"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#2c2c2c"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#8a8a8a"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#373737"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#3c3c3c"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "visibility": "simplified"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "visibility": "simplified"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#4e4e4e"
          }
        ]
      },
      {
        "featureType": "road.local",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "featureType": "transit",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#000000"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#3d3d3d"
          }
        ]
      }
    ], {name: 'Styled Map'});

  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 2,
    center: {lat: 20, lng: 0},
    mapTypeControl: false,
    fullscreenControl: false,
    streetViewControl: false,
    zoomControl: false,
    mapTypeControlOptions: {
      mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain', 'styled_map']
    }
  });

  map.mapTypes.set('styled_map', styledMapType);
  map.setMapTypeId('styled_map');

  var heatmap;
  var grad = [
  'rgba(36, 106, 140, 0.1)',
  'rgba(69, 122, 197, 0.8)',
  'rgba(90, 137, 203, 0.8)',
  'rgba(110, 152, 210, 0.8)',
  'rgba(152, 181, 223, 0.8)',
  'rgba(172, 196, 229, 0.8)',
  'rgba(193, 210, 235, 0.8)',
  'rgba(213, 225, 214, 0.8)',
  'rgba(234, 240, 248, 0.8)',
  'rgba(255, 255, 255, 0.8)'
  ];
  var tweetLocationStream = new google.maps.MVCArray([]);
  var tweetHashtagStream = new google.maps.MVCArray([]);

  heatmap = new google.maps.visualization.HeatmapLayer ({
    data: tweetLocationStream,
    radius: 12,
    opacity: 0.8,
    gradient: grad
  });
  heatmap.setMap(map);


  if (io!== undefined) {
    // var socket = io.connect('https://localhost:8000');
    var socket = io.connect('https://twitter-pulse.herokuapp.com:8000/');
    socket.on('twitter-stream', function(data){
      if (data.hashtags.length > 0) {
        let tweetHashtags = data.hashtags.map(tag => {return tag.text;});
        tweetHashtagStream.push(tweetHashtags);
      }

      let tweetLocation = new google.maps.LatLng(data.lng, data.lat);
      tweetLocationStream.push(tweetLocation);

      let tweetContent = '<div id="content">' + '<div id="prof-info">' +
      `<img id="prof-pic" src="${data.profile_pic}"/>` + '<div id="prof-names">' +
      '<div id="name">' + data.name + '</div>'+
      '<div id="username">' + '@' + data.username + '</div>' + '</div>' + '</div>' +
      data.text +
      '</div>';

      let infowindow = new google.maps.InfoWindow({
        content: tweetContent,
        maxWidth: 150
      });

      let tweetDot = './css/smalldot-largedot.png';
      let marker = new google.maps.Marker({
        position: tweetLocation,
        map: map,
        icon: tweetDot,
      });
      marker.addListener('click', function() {
        infowindow.open(map, marker);
      });
      setTimeout(() => {
        marker.setMap(null);
      }, 2500);
      });

    socket.on('connected', function(res){
      socket.emit('start tweets');
    });
  }

}
