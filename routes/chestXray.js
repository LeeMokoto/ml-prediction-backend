const express = require('express'); //import express

const router  = express.Router(); 

const chestXray = require('../controllers/chestXray'); 

router.post("/predict", chestXray.predictImage)

module.exports = router; // export to use in server.js
