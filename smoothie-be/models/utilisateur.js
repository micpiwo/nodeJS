const mongoose = require('mongoose');

const usersShema = mongoose.Schema({
    picture: String,
    age: Number,
    eyeColor: String,
    name: [
        {
            first: String
        },
        {
            last: String
        }
    ],
    compagny: String,
    email: String,
    phone: String,
    address: String

});

const Users = module.exports = mongoose.model('utilisateur', usersShema, 'utilisateur');