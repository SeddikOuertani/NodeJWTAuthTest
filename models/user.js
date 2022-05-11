const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema
let User = new Schema({
        firstName : String,
        lastName : String,
        email : String,
        userName : String,
        password : String,
    },
    { collection: 'User'}
)

module.exports = mongoose.model('User', User);