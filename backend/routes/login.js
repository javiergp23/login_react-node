const router = require('express').Router();
const { jsonResponse } = require('../lib/jsonResponse');
const loginUser = require('../controllers/LoginController');

router.post('/', loginUser)
  
module.exports = router;