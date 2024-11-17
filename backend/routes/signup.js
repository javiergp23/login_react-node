const router = require('express').Router();
const { jsonResponse } = require('../lib/jsonResponse');
const  createUser  = require('../controllers/SignupController.js');

router.post('/', createUser);

module.exports = router;