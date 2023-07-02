const express = require('express'); //import express

const xrayRouter  = express.Router(); 

const chestXray = require('../controllers/chestXray'); 

xrayRouter.post("/predict", chestXray.predictImage);

module.exports = xrayRouter; // export to use in server.js
