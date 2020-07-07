const express = require('express');
const r = express.Router();
const noteController = require('../controllers/note.controller');

r.post('/create', noteController.create);
r.get('/:id', noteController.view);
r.get('/', noteController.viewAll);
r.put('/update/:id', noteController.update);
r.delete('/delete/:id', noteController.delete);

module.exports = r;