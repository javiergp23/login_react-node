const router = require('express').Router();
const { jsonResponse } = require('../lib/jsonResponse');
const  createUser  = require('../controllers/SignupController');

router.post('/', createUser);

module.exports = router;