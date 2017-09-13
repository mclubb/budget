var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var mongodb_url = "mongodb://localhost:27017/budget";

router.get('/', function(req, res) {
	var mongoClient = mongodb.MongoClient;
	mongoClient.connect(mongodb_url, function(err, db) {
		if( err ) {
			console.log(err);
		}
		var collection = db.collection('ledger');
		collection.find({}).toArray(function(err, result) {
			if( err ) {
				console.log(err);
			}
			console.log(result);
			res.render('ledger', {"items": result});
		});
	});

});

module.exports = router;
