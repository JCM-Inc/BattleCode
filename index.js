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
// let users = 0;
const io = require('socket.io')(server);
// const nsp = require('socket.io')(server);

// io.on('connection', (socket) => {
//   users += 1;
//   // console.log('a user connected', users);
//   socket.emit('msg', 'another user', users);
//   socket.on('msg', (msg) => {
//     io.emit('msg', msg);
//   });
// });
const challengeSocketCreation = (req, res) => {
  const cb = (name) => {
    // const nsp = io.of(`/${name}`);
    const nsp = io.of('/nsp');

    nsp.on('connection', (socket) => {
      console.log('user connected');
      socket.emit('msg', 'server hears you');
      socket.on('msg', (msg) => {
        io.emit('msg', msg);
      });
      socket.on('user', (user) => {
        console.log(user)
        io.emit('user', user);
      });
      // setInterval(() => {
      //   let count = 1;
      //   socket.emit('msg', count);
      //   count++;
      // }, 100);
    });
    // console.log(nsp)
  };
  db.returnOneChallenge(req, res, cb);
};

app.post('/signin', (req, res) => {
  auth.tokenCheck(req.body.idtoken, (gUserData) => {
    db.findUser(gUserData, (bcUserProfile) => {
      res.status(200).send(bcUserProfile);
    });
  });
});
app.get('/competitions', db.getChallenges);
app.get('/competition', db.getChallengeById);
app.post('/uniquecompetition', challengeSocketCreation);
app.post('/makechallenge', db.makeChallenge);
app.post('/gamewin', db.gameWin);
app.get('/games', db.getGameWinners);
app.get('/findUserById', db.findUserById);
