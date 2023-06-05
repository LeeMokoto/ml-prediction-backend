const express = require('express'); //import express

const teaRouter  = express.Router(); 

const teaController = require('../controllers/tea'); 

teaRouter.post('/tea', teaController.newTea); 
teaRouter.get('/tea/1', teaController.getTea); 
teaRouter.delete('/tea/1', teaController.deleteTea); 

module.exports = teaRouter; // export to use in server.js