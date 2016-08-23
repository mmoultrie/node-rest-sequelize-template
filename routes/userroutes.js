var express = require('express');
var router = express.Router();
var models = require('../models');
var _model = models.User;

// Api list get, post[field]

//get all objs
router.get('/', function(req, res) {
    _model.findAll().then(function(objs) {
        //res.setHeader('Content-Type', 'application/json');
        res.send(objs);
    });
});

//post by an update obj
router.put('/field', function(req, res) {
    var obj = req.body;
    var updateObject = function() {
        var ob= {};
        for(prop in obj){
            if(prop != 'id'){
                ob[prop] = obj[prop];
            }
        }
        console.log(ob);
        return ob;
    };
    _model.update(
        updateObject(),
        { where: { id: obj.id }
        }).then( function() {
    });
});
module.exports = router;