var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var ObjectId = require('mongodb').ObjectId;
var config = require('../config');
var mongodb_url = "mongodb://" + config.dbuser + ":" + config.dbpass + "@" + config.dbhost + ":27017/" + config.db;

router.get('/', function(req, res) {
	var mongoClient = mongodb.MongoClient;
	mongoClient.connect(mongodb_url, function(err, db) {
		if( err ) { console.log(err);
		}
		var collection = db.collection('category');
		collection.find({}).toArray(function(err, result) {
			if( err ) {
				console.log(err);
			}
                        result.forEach(function(item) {
                            item.edit_url = "/category/edit/" + item._id.toString();
                            item.delete_url = "/category/delete/" + item._id.toString();
                        });
			res.render('category', {"categories": result});
		});
	});

});


router.get('/new', function(req, res) {
    res.render('category_new');
});

router.post('/new', function(req, res) {
    var mongoClient = mongodb.MongoClient;
    mongoClient.connect(mongodb_url, function(err, db) {
        if( err ) {
            console.log(err);
        }
        db.collection('category').insertOne({"category": req.body.category}, function(err, result) {
            if( err ) {
                console.log(err);
            }

            console.log(result);
            res.redirect('/category');
        });
    });
});

router.get('/edit/:id', function(req, res) {
    var mongoClient = mongodb.MongoClient;
    mongoClient.connect(mongodb_url, function(err, db) {
        db.collection('category').find({'_id': new ObjectId(req.params.id)}).toArray(function( err, result ) {
            if( err ) {
                console.log(err);
            }
            res.render('category_edit', {'category': result });
        });
    });

});

router.post('/edit/:id', function(req, res) {
    var mongoClient = mongodb.MongoClient;
    mongoClient.connect(mongodb_url, function(err, db) {
        db.collection('category').updateOne({'_id': new ObjectId(req.params.id)}, { 'category': req.body.category }, function(err, result) {
            if( err ) {
                console.log(err);
            }
            res.redirect('/category');
        });
    });

});

router.get('/delete/:id', function(req, res) {
    var mongoClient = mongodb.MongoClient;
    mongoClient.connect(mongodb_url, function(err, db) {
        db.collection('category').deleteOne({'_id': new ObjectId(req.params.id)}, function(err, result) {
            if( err ) {
                console.log( err );
            }

            res.redirect('/category');
        });
    });
});

module.exports = router;
