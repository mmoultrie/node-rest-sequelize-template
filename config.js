var config = {};
var db = {};
db.user = '';
db.password = '';
db.schema ="";

var opts = {
    host: '',
    dialect: '' ,
    define: {
        //prevent sequelize from pluralizing table names
        freezeTableName: true,
        timestamps: false
    }
};

config.secret= "mySecret";
config.port = process.env.PORT || 9980;
config.db = db;
config.opts = opts;

module.exports = config;