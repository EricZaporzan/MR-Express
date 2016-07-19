const router = require('express').Router();

router.get('/example', function(req, res) {
    res.json({'title':'hello world!'});
});

module.exports = router;
