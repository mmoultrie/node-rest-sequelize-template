
var express = require('express');        
var app = express();                 
var bodyParser = require('body-parser');
var config = require('./config');
var models = require('./models');
var router = require('./routes/router');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', router);

models.sequelize.sync().then(function () {
	app.listen(config.port);
});
console.log('Magic happens on port ' + config.port);