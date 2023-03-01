const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new mongoose.Schema({
    firstname: {type: String},
    lastname: {type: String},
    email: {type:String, unique: true},
    username: {type: String, unique: true},
    password: {type: String},
});
module.exports = mongoose.model("User", userSchema)
