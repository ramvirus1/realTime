var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);
var bodyparser = require("body-parser");
var port = process.env.port || 3000;

app.use(bodyparser.urlencoded({ extended:true }));
app.use(bodyparser.json);

var clientsConnected = {};

io.on("connection",function(socket){
   socket.on("join", function(name){
        clientsConnected[name] = socket.id;
        socket.emit("join",clientsConnected);
   });
   socket.on("message",function(msg){
        var message = msg;
        message.sendTo = clientsConnected[msg.sendTo];
        io.sockets.connected[msg.sendTo].emit("message",message);
   });
   socket.on("locationUpdates",function(coords){
        //update map markers on users location updates 
   });
   socket.on('disconnect', function () {
        delete clientsConnected[socket.id];
   });
});

http.listen(port,function(){});