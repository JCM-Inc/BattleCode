const mongoDB = `mongodb://cain:${process.env.DBPW}@ds127983.mlab.com:27983/codebattle`; 
const mongoose = require('mongoose');

require('dotenv').config();

const promise = mongoose.connect(mongoDB, {
  useMongoClient: true,
});
promise.then(db => db.on('error', console.error.bind(console, 'MongoDB connection error:')));


const Schema = mongoose.Schema;
const userSchema = Schema({
  username: String,
  email: String,
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

exports.findUser = (dataObject, cb) => {
  console.log('finduser called with', dataObject)
  User.find(dataObject).exec(
    (err, success) => {
      if (err) {
        console.error(err);
      } else {
        console.log(success)
        if (success.length === 0) {
          User.create({
            username: dataObject.email,
            email: dataObject.email,
          }, (err, instance) => cb(instance));
        } else if (success.length === 1) {
          cb(success[0]);
        }
      }
    },
  );
};
// User.create({
//   username: 'cainsux',
//   email: 'supersecrete@secret.com',
// }, (err, instance) => err ? console.error(err) : console.log(instance, 'new cain'));
// User.find((err, user) => err ? console.error(err) : console.log(user, 'founded'));
// Challenge.find(
//   (err, challenge) => err ? console.error(err) : console.log(challenge, 'clg found'));
