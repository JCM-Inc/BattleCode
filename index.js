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

io.on('connection', (socket) => {
  let addTwoPlayers = ['testUser1', ' '];
  socket.on('room', (data) => {
    if (data.userInfo.testName === 'addTwo') {
      addTwoPlayers.push(data.userInfo.user, ' ');
      io.sockets.emit('room', addTwoPlayers);
    }
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
