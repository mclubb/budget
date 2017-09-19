var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var ObjectId = mongodb.ObjectId;
var config = require('../config');
var mongodb_url = "mongodb://" + config.dbuser + ":" + config.dbpass + "@" + config.dbhost + ":27017/" + config.db;

router.get('/', function(req, res) {
    var buckets;
	var mongoClient = mongodb.MongoClient;
	mongoClient.connect(mongodb_url, function(err, db) {
		if( err ) {
			console.log(err);
		}
        db.collection('buckets').find({}).toArray(function(err, results) {
        buckets = results;
        });
		var collection = db.collection('ledger');
		collection.find({}).sort({'date': -1}).toArray(function(err, result) {
			if( err ) {
				console.log(err);
			}
			res.render('ledger', {"items": result, 'buckets': buckets});
		});
	});

});

router.post('/edit_bucket', function(req, res) {
    var mongoClient = mongodb.MongoClient;
    mongoClient.connect(mongodb_url, function(err, db) {
        if( err ) {
            console.log( err );
        }
        db.collection('ledger').updateOne({'_id': new ObjectId(req.body.ledger_id)}, {$set: {'bucket': req.body.bucket}}, function(err, result) {
            if( err) {
                console.log( err );
            }
            console.log( "updated bucket in ledger" );
            res.send("Success");
        });
    });
});

module.exports = router;
