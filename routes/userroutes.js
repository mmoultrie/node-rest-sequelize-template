var express = require('express');
var router = express.Router();
var models = require('../models');
var _model = models.User;

//  Api calls get, post[field]

//  get one
router.get('/:id', function(req, res) {
    _model.findOne({
        where:{id: req.params.id}
    }).then(function(obj) {
        if(obj){
            res.send(obj);
        }else {
            res.send('no machine found')
        }
    }, function (err) {
        res.send(err);
    });
});

//  get all
router.get('/', function(req, res) {
    _model.findAll().then(function(objs) {
        //res.setHeader('Content-Type', 'application/json');
        res.send(objs);
    });
});

//  post via an update obj
router.put('/field', function(req, res) {
    var obj = req.body;
    var updateObject = function() {
        var ob= {};
        for(prop in obj){
            if(prop != 'id'){
                ob[prop] = obj[prop];
            }
        }
        return ob;
    };
    _model.update(updateObject(),
        {
            where: { id: obj.id }
        }).then( function() {
    });
});

module.exports = router;