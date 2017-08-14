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

const gameSchema = new Schema({
  winner: {
    type: String, ref: 'User',
  },
  challenge: {
    type: String, ref: 'Challenge',
  },
});


const Challenge = mongoose.model('Challenge', challengeSchema);
const User = mongoose.model('User', userSchema);
const Game = mongoose.model('Game', gameSchema);


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

exports.findUser = (dataObject, cb) => {
  User.findOne(dataObject).exec((err, success) => {
    if (err) {
      console.log(err);
    } else {
      if (!success) {
        User.create({
          username: dataObject.email,
          email: dataObject.email,
        }, (err2, instance) => cb(instance));
      } else {
        cb(success);
      }
    }
  },
  );
};

exports.findUserById = (req, res) => {
  User.findOne(req.query).exec((err, success) => {
    err ? console.log(err) : res.send(success.username);
  });
};

exports.gameWin = (req, res) => {
  User.findOne({ email: req.body.email }).exec((foundError, suc) => {
    if (foundError) {
      console.error(foundError);
    } else {
      Game.create({
        winner: suc._id,
        challenge: req.body.gameId,
      }, (err, instance) => {
        err ? console.error(err) : console.log('saved', instance);
      });
    }
    res.send('challenge saved');
  });
};

exports.getGameWinners = (req, res) => {
  Game.find({}).exec((err, games) => {
    err ? console.error(err) : res.send(games);
  });
};
