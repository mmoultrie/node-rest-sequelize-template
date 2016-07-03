"use strict";

var fs = require("fs");
var path = require("path");
var Sequelize= require("sequelize");
var config= require('../config');
var db= {};
var opts = {
    host: config.db.uri,
    dialect: 'mysql' ,
    define: {
        freezeTableName: true,
        timestamps: false
    }
};
var sequelize = new Sequelize(config.db.schema, config.db.user, config.db.password, opts);
sequelize
    .authenticate()
    .then(function(err) {
        console.log('Connection has been established successfully.');
    })
    .catch(function (err) {
        console.log('Unable to connect to the database:', err);
    });

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== "index.js");
  })
  .forEach(function(file) {
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;