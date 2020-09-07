const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let LoginSchema = new Schema({
	login :String,
	password :String
});

module.exports = mongoose.model('Login', LoginSchema);