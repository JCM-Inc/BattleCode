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
  tests: {
    a: 'string',
    test2: '75',
  },
});
exports.returnOneChallenge = (req, res) => {
  Challenge.find({
    _id: req.body.id,
  }).exec((err, found) => {
    if (err) {
      console.error(err);
    } else {
      res.status(200).send(found);
    }
  });
};
exports.getChallenges = (req, res) => {
  Challenge.find({}).exec((err, challenges) => {
    if (err) {
      console.error(err);
    } else {
      res.send(challenges);
    }
  });
};
const Game = mongoose.model('Game', gameSchema);

exports.findUser = (dataObject, cb) => {
  User.find(dataObject).exec(
    (err, success) => {
      if (err) {
      } else {
        if (success.length === 0) {
          User.create({
            username: dataObject.email,
            email: dataObject.email,
          }, (err2, instance) => cb(instance));
        } else if (success.length === 1) {
          cb(success[0]);
        }
      }
    },
  );
};
