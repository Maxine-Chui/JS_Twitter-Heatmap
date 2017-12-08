const _twitter = require('twitter');
var express = require('express');
var path = require('path');
var app = express();

var server = require('http').Server(app);
var io = require('socket.io')(server);

const port = process.env.PORT || 8000;
server.listen(port);

app.use('/', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

var twitter = new _twitter({
  "consumer_key": process.env.TWITTER_CONSUMER_KEY,
  "consumer_secret": process.env.TWITTER_CONSUMER_SECRET,
  "access_token_key": process.env.TWITTER_ACCESS_TOKEN,
  "access_token_secret": process.env.TWITTER_ACCESS_TOKEN_SECRET,
});


var currentStream = null;

io.on('connection', function(socket) {
  console.log('Connected!');
  socket.on('disconnect', () => console.log('Disconnected'));
  socket.on('start tweets', function() {
    if (currentStream === null) {

        twitter.stream('statuses/filter', {'locations':'-180,-90,180,90'}, function(stream){
          currentStream = stream;
          currentStream.on('data', function(data) {
            if (data.coordinates) {
              if (data.coordinates !== null) {
                var tweet = {
                  "name": data.user.name,
                  "username": data.user.screen_name,
                  "profile_pic": data.user.profile_image_url_https,
                  "text": data.text,
                  "hashtags": data.entities.hashtags,
                  "lat": data.coordinates.coordinates[0],
                  "lng": data.coordinates.coordinates[1]
                };
                socket.broadcast.emit("twitter-stream", tweet);
                socket.emit('twitter-stream', tweet);
              }
            }
          });
        });
    }
  });
  socket.emit('connected');
});
