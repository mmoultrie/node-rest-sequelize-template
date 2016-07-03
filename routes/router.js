var express = require('express');
var router = express.Router(); 
var userRouter = require('./userroutes');

router.get('/', function(req, res) {
    res.type('text/plain');
    res.send('testing');
});

router.use('/users',userRouter);

module.exports = router;