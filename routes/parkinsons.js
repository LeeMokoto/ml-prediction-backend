const express = require('express'); //import express

const parkinsonsRouter  = express.Router(); 

const parkinsonsController = require('../controllers/parkinsons'); 

parkinsonsRouter.post('/parkinsons', parkinsonsController.predictParkinsons);  

module.exports = parkinsonsRouter; 