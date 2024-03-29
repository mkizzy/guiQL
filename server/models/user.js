const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new mongoose.Schema({
    firstName: {type:String},
    lastName: {type:String},
    email: {type:String, unique: true},
    password: {type: String},
    refreshToken: {type: String}
});
module.exports = mongoose.model("user", userSchema)
