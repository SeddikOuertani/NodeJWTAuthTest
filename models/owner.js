const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Owner = new Schema({
        firstName : String,
        lastName : String,
        phone : String,
        email : String,
        city : String,
        postalCode : String, 
        address : String,
    },
    { collection : 'Owner'}
)

module.exports = mongoose.model('Owner', Owner);