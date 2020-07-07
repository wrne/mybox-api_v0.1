const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let NoteSchema = new Schema({
	content : String,
	dateCreation: {type: Date, default: Date.now()},
	userId :String
});

module.exports = mongoose.model('Note', NoteSchema);