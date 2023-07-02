const express = require('express'); //import express

const diabetesRouter  = express.Router(); 

const diabetesController = require('../controllers/diabetes'); 

diabetesRouter.post('/diabetes', diabetesController.predictDiabetes);  

module.exports = diabetesRouter; 