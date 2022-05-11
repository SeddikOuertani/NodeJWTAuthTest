const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema
let Car = new Schema({
        brand : String,
        model : String,
        price : Number,
        idOwner : String, 
    },
    { collection: 'Car'}
)

module.exports = mongoose.model('Car', Car);