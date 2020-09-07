const express = require('express');
const r = express.Router();
const loginController = require('../controllers/login.controller');

r.post('/', loginController.login);

module.exports = r;