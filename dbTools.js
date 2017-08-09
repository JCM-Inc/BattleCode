const mongoDB = `mongodb://cain:${process.env.DBPW}@ds127983.mlab.com:27983/codebattle`;
const mongoose = require('mongoose');

require('dotenv').config();

let db = false;
mongoose.connect(mongoDB, {
  useMongoClient: true,
}, (error) => {
  if (error) {
    console.error(error);
  } else {
    db = true;
    console.log('connected to', mongoDB);
  }
});
setInterval(() => {
  if (!db) {
    console.log('NOT CONNECTED TO DB');
  }
}, 1000);

const Schema = mongoose.Schema;
const userSchema = Schema({
  username: String,
  email: String,
});
const challengeSchema = new Schema({
  name: String,
  description: String,
  tests: Object,
});
const Challenge = mongoose.model('Challenge', challengeSchema);
exports.makeChallenge = (req, res) => {
  Challenge.find({
    name: req.body.name,
  }).exec((err, found) => {
    if (found.length > 0) {
      res.status(200).send('already exists');
    } else {
      Challenge.create(req.body, (err, made) => {
        res.status(201).send(made);
      });
    }
  });
};
const gameSchema = new Schema({
  winner: {
    type: Number, ref: 'User',
  },
  challenge: {
    type: Number, ref: 'Challenge',
  },
});
const User = mongoose.model('User', userSchema);
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
  User.findOne(dataObject).exec((err, success) => {
    if (err) {
      console(err);
    } else {
      if (!success) {
        console.log('not found, making new');
        User.create({
          username: dataObject.email,
          email: dataObject.email,
        }, (err2, instance) => cb(instance));
      } else {
        console.log('user found');
        cb(success);
      }
    }
  },
  );
};
// Challenge.create({
//   name: 'name',
//   description: 'desc',
//   tests: {
//     a: 'atest',
//   },
// }, (err, suc) => {
//   console.log(suc);
// });
// for (let i = 0; i < 10; i++) {
//   let chal = {
//     name: `test${i}`,
//     description: `desc${i}`,
//     tests: {
//       a: `a${i}`,
//       b: `b${i}`,
//     },
//   };
//   Challenge.create(chal, (err, suc) => {
//     err ? console.error(err) : console.log(suc);
//   });
// }
