// const mongoDB = `mongodb://codebattle:${process.env.DBPW}@ds127783.mlab.com:27783/codebattle`;
const mongoDB = `mongodb://codebattle:catsoup@ds127983.mlab.com:27983/codebattle`
require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(mongoDB);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


// const Schema = mongoose.Schema;
// const UserSchema = new Schema({
//   username: String,
//   password: String,
// });
// const UserModel = mongoose.model('UserModel', UserSchema);
// const UserOrCollection = new UserModel({
//   username:'Cain',
//   password: 'Cain'
// })
// UserOrCollection.save((err, created)=> {
//   if (err) {
//     console.log(err);
//   }
//   // console.log(created);
// })
// UserModel.create({
//   username: 'jacques',
//   password: 'woah'
// }, (err, instance) => {
//   if (err) return handleError(err) 
//   console.log(instance);
// })

// UserModel.find((err, user) => {
//   console.log('inside find');
//   if (err){
//     console.error(err)
//   } 
//   console.log(user, 'this is finidng');
// })
