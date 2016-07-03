var express = require('express');
var userRouter = express.Router(); 
var models = require('../models');

userRouter.get('/', function(req, res) {
    models.User.findAll().then(function(users) {
        console.log(res);
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(users));
    });
});
module.exports = userRouter;