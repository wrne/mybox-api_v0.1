const express = require('express');
const r = express.Router();
const userController = require('../controllers/user.controller');

r.post('/create', userController.create);
r.get('/:id', userController.view);
r.get('/', userController.viewAll);
r.put('/update/:id', userController.update);
r.delete('/delete/:id', userController.delete);

module.exports = r;