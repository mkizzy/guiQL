const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const uriSchema = new Schema ({
    uri: {type: String, required: true}
})

module.exports = mongoose.model('Uri', uriSchema)