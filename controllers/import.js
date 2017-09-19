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
var multer = require('multer');
var upload = multer({dest:'uploads/'});

router.get('/', function(req, res) {
  res.render('import');  
});

router.post('/', upload.single('ledgerfile'),function(req, res) {

    var mongoClient = mongodb.MongoClient;
    fs.readFile(__dirname + "/../" + req.file.path, "utf8", function(err, data) {
	if( err ) {
		console.log( err );
	}

    	parse(data, {columns:true}, function(err, record) {
		if( err ) { 
			console.log( err );
		}		
		console.log( record );
    		mongoClient.connect(mongodb_url, function( err, db) {
					if( err ) {
						console.log( err );
					}
					var collection = db.collection('ledger');
					if ( record[0]['Post Date'] ) {
						record.forEach(function(val, indx, arr) {
                            var post_date = val['Post Date'];
                            post_date_arr = post_date.split('/');
                            post_date = post_date_arr[2] + "-" + post_date_arr[0] + "-" + post_date_arr[1];
							collection.updateOne(
								{
									'date': new Date(post_date).toISOString(), 
									'desc': val['Description'], 
									'amount': val['Amount']
								}, 
								{
									'date': new Date(post_date).toISOString(), 
									'desc': val['Description'], 
									'amount': val['Amount']
								},
								{
									upsert: true
								}, function(err, result) {
									if( err ) { 
										console.log( err );
									}

									if( result ) {
										//console.log( result );
									}
								});	
						});
					}

                    if( record[0]['Date'] ) {
                        record.forEach(function(val, indx, arr) {
                            var post_date = val['Date'];
                            post_date_arr = post_date.split('/');
                            post_date = post_date_arr[2] + "-" + post_date_arr[0] + "-" + post_date_arr[1];
                            collection.updateOne(
								{
									'date': new Date(post_date).toISOString(), 
									'desc': val['Description'], 
									'amount': val['Amount']
								}, 
								{
									'date': new Date(post_date).toISOString(), 
									'desc': val['Description'], 
									'amount': val['Amount']
								},
								{
									upsert: true
								}, function(err, result) {
									if( err ) { 
										console.log( err );
									}

									if( result ) {
										//console.log( result );
									}
								});	
						});
                    }
			});
		});
    });

    res.render('import_done');

});

module.exports = router;
