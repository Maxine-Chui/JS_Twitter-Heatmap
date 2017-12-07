const _twitter = require('twitter');
var express = require('express');
var app = express();

var server = require('http').Server(app);
var io = require('socket.io')(server);


// console.log(server);
// console.log(io);

server.listen(3000);

app.use('/', express.static(__dirname + '/public'));

var twitter = new _twitter({
  "consumer_key": "vI0IPUgUv1HSK7SokVULdpVgf",
  "consumer_secret": "oY5zZbVCZSRQXuGsFn1T6lYjyoTMPUXR7V8mzTatMZ49hOqAXL",
  "access_token_key": "937844271801024512-kcRwtpUkUFYO7qQicUyxvUYk6xABCJC",
  "access_token_secret": "BAMOJuV7fKz5tSUHtuO4rTCR4LX4WiQHkc1ApRaqsjhBs",
});

// twitter.post('statuses/update', {status: 'Goodbye'}, function(err, res) {
//   if (err) {
//     console.log(err);
//
//   } else {
//     console.log(res);
//   }
// });

var currentStream = null;

io.on('connection', function(socket) {
  console.log('Connected!');
  socket.on('start tweets', function() {
    if (currentStream === null) {

        twitter.stream('statuses/filter', {'locations':'-180,-90,180,90'}, function(stream){
          // if (currentStream) {
          //   currentStream.destroy();
          // }
          currentStream = stream;
          currentStream.on('data', function(data) {
            if (data.coordinates) {
              if (data.coordinates !== null) {
                var tweet = {"username": data.user.screen_name, "text": data.text, "hashtags": data.entities.hashtags, "lat": data.coordinates.coordinates[0],"lng": data.coordinates.coordinates[1]};
                socket.broadcast.emit("twitter-stream", tweet);
                socket.emit('twitter-stream', tweet);
                console.log(tweet);
                // console.log(data);
              }
            }
          });
          currentStream.on('error', function(error) {
            console.log(error);
          });
        });
    }
  });
  socket.emit('connected');
});
