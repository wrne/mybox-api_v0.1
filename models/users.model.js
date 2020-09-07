const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
	name : String,
	id :String,
	email :String,
	phone :String,
	password :String,
	dateCreation: {type: Date, default: Date.now()},
});

module.exports = mongoose.model('User', UserSchema);