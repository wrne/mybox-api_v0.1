const Note = require('../models/notes.model');

exports.create = (req, res, next) => {
	let note = new Note(
		{
			content: req.body.content,
			dateCreation: req.body.dateCreation,
			userId: req.body.userId
		}
	)

	note.save((err)=>{
		if (err) return next(err);

		res.send('Nota criada com sucesso')
	});
};

exports.view = (req, res, next) => {
	Note.findById(req.params.id, (err, ret)=>{
		if (err) return next(err);

		res.send(ret);
	})
};

exports.viewAll = (req, res, next)=>{
	Note.find((err,retAll)=>{
		if (err) return next(err);

		res.send(retAll);
	})
};

exports.update = (req,res,next) => {
	Note.findByIdAndUpdate(req.params.id,{$set: req.body},(err)=>{
		if (err) return next(err);

		res.send('Registro atualizado com sucesso.');
	});
};


exports.delete = (req, res, next) => {

	Note.findByIdAndDelete(req.params.id, (err)=>{
		if (err) return next(err);

		res.send('Registro deletado com sucesso');
	})

};