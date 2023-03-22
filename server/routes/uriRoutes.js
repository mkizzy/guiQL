const express = require('express');
const router = express.Router();
const uriController = require('../controllers/uriControllerController')


router.post("/createURI", uriController.createURI)
module.exports = router