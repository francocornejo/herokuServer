var mongoose = require('mongoose');

module.exports = mongoose.model('Usuario',{
    username: String,
    password: String,
    email: String,
    firstName: String,
    lastName: String
});