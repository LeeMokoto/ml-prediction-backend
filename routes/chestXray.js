const express = require('express'); //import express

const router  = express.Router(); 

const chestXray = require('../controllers/chestXray'); 

router.post("/predict", chestXray.predictImage)
router.get("/xray", chestXray.dummyFunc)

module.exports = router; // export to use in server.js
