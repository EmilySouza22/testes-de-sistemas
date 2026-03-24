//Importando router do express
const express = require('express')
const route = express.Router()

//controller
const { handleCreateAccount } = require('../controller/user.js');

// TODO, adicionar os endpoints aqui
route.post('/create', handleCreateAccount);

module.exports = route;
