var express = require('express');
var router = express.Router(); 
var userRouter = require('./userroutes');

router.use('/users',userRouter);

module.exports = router;