const express = require('express');

const characterRouter = express.Router();
const characterController = require('../controllers/characterController');

characterRouter.get('/:id', characterController.getById);

module.exports = characterRouter;
