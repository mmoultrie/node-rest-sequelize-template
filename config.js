var config = {};
var db = {};
db.user = '';
db.password = '';
db.uri = '';
db.schema ='';


config.port = process.env.PORT || 9980;
config.db = db;

module.exports = config;