var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var config = require('../config');
var mongodb_url = "mongodb://" + config.dbuser + ":" + config.dbpass + "@" + config.dbhost + ":27017/" + config.db;

router.get('/', function(req, res) {
	var mongoClient = mongodb.MongoClient;
	mongoClient.connect(mongodb_url, function(err, db) {
		if( err ) {
			console.log(err);
		}
		var collection = db.collection('buckets');
		collection.find({}).toArray(function(err, result) {
			if( err ) {
				console.log(err);
			}
			res.render('buckets', {"buckets": result});
		});
	});

});

module.exports = router;
