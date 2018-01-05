const express = require('express');

require('dotenv').config();
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./dbTools');
const auth = require('./auth');
const axios = require('axios');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const twilio = require('twilio');
const client = new twilio(process.env.ACCOUNTSID, process.env.AUTHTOKEN);
const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');
const Agenda = require('agenda');

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
let messages = [];
io.on('connection', (socket) => {
  connections.push(socket);
  console.log('Connected: %s sockets connected', connections.length);
  // socket.on('room', (data) => {
  //   // console.log('data is ', data);
  //   db.addUserToRoom(data);
  // });
  socket.on('chat', (data) => {
    messages.push(data.user.user, ' said ',data.msg, ' ');
    console.log(data);
    io.sockets.emit('new message', messages);
  });
  socket.on('typing', (data) => {
    console.log(data);
  });
  socket.on('disconnect', () => {
    messages = [];
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

const User = mongoose.model('User');

const triggerMessages = function () {

  let allNumbers = []
  User.find({}, (err, users) => {
    if (err) {
      throw err;
    } else {
      for (var i = 0; i < users.length; i++) {
        if (users[i].phoneNumber !== null || undefined) {
          allNumbers.push(users[i].phoneNumber);
        }
      }
      const validNumbers = allNumbers.filter(number => { return typeof number === 'string' && number.length > 8 });
      validNumbers.forEach(num => {
        client.messages.create({ to: num, from: '(504) 226-6791', body: `New challenges await you at BattleCode.. you must DEFEND YOUR HONOR` }, function (err, data) {
        });
      });
    }
  });
};


async function run() {

  const db = await MongoClient.connect(`mongodb://battlecode:${process.env.DBPW}@ds139067.mlab.com:39067/battlecode`);
  const agenda = new Agenda().mongo(db, 'users');
  agenda.define('sendMessages', () => {
    triggerMessages()();
    process.exit(0);
  });

  await new Promise(resolve => agenda.once('ready', resolve));

  agenda.schedule(new Date(Date.now() + 1000), 'sendMessages');
  agenda.start();
}

run().catch(error => {
  console.error(error);
  process.exit(-1);
});
