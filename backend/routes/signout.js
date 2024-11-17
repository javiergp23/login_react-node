const router = require('express').Router();

router.post('/', (req, res) => {
    
    res.send('Sign Out');
})

module.exports = router;