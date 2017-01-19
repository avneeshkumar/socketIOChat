

var _dirName = 'html';
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.get('/', function(req, res){
  res.sendFile( _dirName+'/index.html', { root: __dirname });
});


io.on('connection', function(socket){

  socket.on('user name', function(msg){
    io.emit('user status', msg+" connected");
  });

  

  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });

  socket.on('disconnect',function(){
  	io.emit('user status', "disconnected");
  });

});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
