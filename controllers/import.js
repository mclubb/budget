// Mike's Import
//Post Date,Transaction Type,Description,Amount,Balance


var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var ObjectId = require('mongodb').ObjectId;
var config = require('../config');
var mongodb_url = "mongodb://" + config.dbuser + ":" + config.dbpass + "@" + config.dbhost + ":27017/" + config.db;
var fs = require('fs');
var parse = require('csv-parse');

router.get('/', function(req, res) {
  res.render('import');  
});

router.post('/', function(req, res) {
    
    res.render('import_done');
});

module.exports = router;
