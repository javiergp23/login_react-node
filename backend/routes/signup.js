const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Sign Up');
})

module.exports = router;