// const mongoDB = `mongodb://cain:catsoup@ds127983.mlab.com:27983/codebattle`; //works
const mongoDB = `mongodb://cain:${process.env.DBPW}@ds127983.mlab.com:27983/codebattle`; //works
const mongoose = require('mongoose');

require('dotenv').config();
// mongoose.connect(mongoDB);
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const promise = mongoose.connect(mongoDB, {
  useMongoClient: true,
});
promise.then(db => db.on('error', console.error.bind(console, 'MongoDB connection error:')));


const Schema = mongoose.Schema;
const userSchema = Schema({
  username: String,
  email: String,
  /* access token hashed
  refresh token, hashed
  email
  */
});
const challengeSchema = new Schema({
  name: String,
  description: String,
  objectOfTests: Object,
});
const gameSchema = new Schema({
  winner: {
    type: Number, ref: 'User',
  },
  challenge: {
    type: Number, ref: 'Challenge',
  },
});
const User = mongoose.model('User', userSchema);
const Challenge = mongoose.model('Challenge', challengeSchema);
Challenge.create({
  name: 'parseJSON',
  description: 'dont leave before midnight',
  objectOfTests: {
    test1: 'ttttesstt',
    test2: 'testtest',
  },
});
const Game = mongoose.model('Game', gameSchema);

// User.create({
//   username: 'cainsux',
//   email: 'supersecrete@secret.com',
// }, (err, instance) => err ? console.error(err) : console.log(instance, 'new cain'));
// User.find((err, user) => err ? console.error(err) : console.log(user, 'founded'));
// Challenge.find(
//   (err, challenge) => err ? console.error(err) : console.log(challenge, 'clg found'));
