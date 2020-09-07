const User = require('../models/users.model');

exports.create = (req, res, next) => {
	
	console.log('API CREATE', req.body);

	let user = new User(
		{
			name: req.body.name,
			id: req.body.id,
			email: req.body.email,
			phone: req.body.phone,
			password: req.body.password,
		}
	)

	user.save((err) => {
		if (err) return next({
			commandOk: false,
			message: 'Falha ao criar usuário',
			error: err
		});

		res.status = 201
		res.send({
			commandOk: true,
			message: 'Usuário criado com sucesso'
		})
	});
};

exports.view = (req, res, next) => {
	User.findById(req.params.id, (err, ret) => {
		if (err) return next({
			commandOk: false,
			message: 'Falha ao consultar usuário',
			error: err
		});

		res.send({
			commandOk: true,
			message: 'Usuário criado com sucesso',
			obj: ret
		});
	})
};

exports.viewAll = (req, res, next) => {
	User.find((err, retAll) => {
		if (err) return next({
			commandOk: false,
			message: 'Falha ao consultar usuários',
			error: err
		});

		res.send({
			commandOk: true,
			message: 'Usuários consultados com sucesso',
			obj: retAll
		});
	})
};

exports.update = (req, res, next) => {
	User.findByIdAndUpdate(req.params.id, { $set: req.body }, (err) => {
		if (err) return next({
			commandOk: false,
			message: 'Falha ao atualizar usuário',
			error: err
		});

		res.send({
			commandOk: true,
			message: 'Registro atualizado com sucesso.'
		});
	});
};


exports.delete = (req, res, next) => {

	User.findByIdAndDelete(req.params.id, (err) => {
		if (err) return next({
			commandOk: false,
			message: 'Falha ao excluir usuário',
			error: err
		});

		res.send({
			commandOk: true,
			message: 'Registro deletado com sucesso'
		});
	})

};