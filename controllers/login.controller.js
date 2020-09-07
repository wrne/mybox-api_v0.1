const User = require('../models/users.model');

exports.login = (req, res, next) => {
	
	console.log('API LOGIN', req.body);

	let login = new Login(
		{
			login: req.body.login,
			password: req.body.password,
		}
	)
/*
	login.save((err) => {
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
*/
};
