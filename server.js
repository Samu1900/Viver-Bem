const express = require('express');
const path = require('path');
 
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine','html');

app.use('/',(req, res)=>{
    res.render('index.html');
});

let messages = [];

io.on('connection', socket =>{

  socket.emit('previousMessages',messages);
  console.log(`Socket conectado : ${socket.id}`);

  socket.on('sendMessage', data => {
    
    messages.push(data);
    socket.broadcast.emit('receivedMessege', data);

  });
});

server.listen(3000);