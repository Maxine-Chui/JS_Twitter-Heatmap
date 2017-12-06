
var map;
function initMap(){
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 2,
    center: {lat: 20, lng: 0},
  });

  var heatmap;
  var tweetStream = new google.maps.MVCArray([]);
  heatmap = new google.maps.visualization.HeatmapLayer ({
    data: tweetStream,
    radius: 20
  });
  heatmap.setMap(map);

  if (io!== undefined) {
    var socket = io.connect('http://localhost:3000');
    console.log('Also connected!');
    socket.on('twitter-stream', function(data){
      let tweetLocation = new google.maps.LatLng(data.lng, data.lat);
      tweetStream.push(tweetLocation);

      let tweetDot = './css/smalldot-largedot.png';
      let marker = new google.maps.Marker({
        position: tweetLocation,
        map: map,
        icon: tweetDot
      });
      setTimeout(() => {
        marker.setMap(null);
      }, 500);
    });

    socket.on('connected', function(res){
      socket.emit('start tweets');
    });
  }


}
