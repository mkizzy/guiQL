const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'guiQL'
  })
    .then(() => console.log('Successfully connected to Mongo DB.'))
    .catch(err => console.log(err));
  //create schema
const userSchema = new mongoose.Schema({
    firstname: {type: String},
    lastname: {type: String},
    email: {type:String, unique: true},
    username: {type: String, unique: true},
    password: {type: String},
    savedURI: [{type: String, ref: 'User'}]
});

module.exports = mongoose.model("User", userSchema)
