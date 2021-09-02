let app = require("express")();
let http = require("http").Server(app); 
let io = require("socket.io")(http);


app.get("/", (req,res)=>{
    res.sendFile(__dirname+"/index.html");
})

io.on("connection", (socket)=>{
    socket.on("name", (name)=>{
        console.log(name);
    })
})

io.on("connection", (socket1)=>{
    socket1.on("message", (msg)=>{
        console.log(msg);
    })
})

// Just an array for sockets.
var sockets = [];

io.on('connection', function(socket) {
  socket.on('event', function() {
    io.emit('another_event', message);
  });

  // Add the new socket to the array, for messing with later
  sockets.push(socket);
});



http.listen(9090, ()=>console.log('Server running on port 9090'))