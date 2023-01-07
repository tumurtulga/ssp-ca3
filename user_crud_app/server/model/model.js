const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    role : String,
    email : {
        type: String,
        required: true,
        unique: true
    },
    mobile : {
        type: String,
    },
    gender : String,
    status : String
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;