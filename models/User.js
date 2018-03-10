var mongoose = require('mongoose');
var UsersSchema = require('../schemas/users');

module.exports = mongoose.model('User',UsersSchema);