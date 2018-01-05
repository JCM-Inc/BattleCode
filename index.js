const express = require('express');

require('dotenv').config();
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./dbTools');
const auth = require('./auth');

const app = express();

app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(bodyParser.json());

const port = process.env.PORT || 5000;
app.set('port', port);
const server = app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('listening on port', port);
  }
});

const io = require('socket.io')(server);


let connections = [];
io.on('connection', (socket) => {
  connections.push(socket);
  console.log('Connected: %s sockets connected', connections.length);
  // socket.on('room', (data) => {
    //   // console.log('data is ', data);
    //   db.addUserToRoom(data);
    // });
    let messages = [];
    socket.on('chat', (data) => {
    messages.push(`${data.user.user} said "${data.msg}"`);
    console.log('message is ', messages);
    io.sockets.emit('new message', messages);
  });
  socket.on('typing', (data) => {
    console.log(data);
  });
});

app.post('/signin', (req, res) => {
  auth.tokenCheck(req.body.idtoken, (gUserData) => {
    db.findUser(gUserData, (bcUserProfile) => {
      res.status(200).send(bcUserProfile);
    });
  });
});

app.get('/competitions', db.getChallenges);
app.get('/competition', db.getChallengeById);
app.post('/uniquecompetition', db.returnOneChallenge);
app.post('/makechallenge', db.makeChallenge);
app.post('/gamewin', db.gameWin);
app.get('/games', db.getGameWinners);
app.get('/findUserById', db.findUserById);
app.get('/getAllUsers', db.getAllUsers);
app.post('/setPhoneNumber', db.setPhoneNumber);
