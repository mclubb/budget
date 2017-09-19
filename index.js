var express = require('express');
var session = require('express-session');
var bodyparser = require('body-parser');
var mongodb = require('mongodb');
var config = require('./config');

var app = express();

var port = 8000;

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine({beautify: true}));
app.use(express.static('public'));

app.use(session({
	secret: 'money',
	cookie: {},
        saveUninitialized: false,
        resave: false
}));

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());




app.use('/ledger', require('./controllers/ledger'));
app.use('/buckets', require('./controllers/bucket'));
app.use('/category', require('./controllers/category'));
app.use('/import', require('./controllers/import'));

app.get('/logout', function(req, res) {
	req.session.destroy();
	res.send("Logged Out");
});

app.get('/login', function(req, res) {
	if( req.session.is_logged_in ) {
		res.redirect('/');
	}
	res.render('login');
});

app.post('/login', function(req, res) {
	if( req.body.email == 'mike@stlwd.com' && req.body.password == 'testing' ) {
		req.session.is_logged_in = true;
		res.redirect('/');
	} else {
		req.session.is_logged_in = false;
		res.render('login');
	}
});

app.get('/', function(req, res) {
	if( !req.session.is_logged_in )
	{
		//res.redirect('/login');
	} else {
		//res.send("Hello");
	}

        // Testing list buckets 
        var mongoClient = mongodb.MongoClient;
        var mongodb_url = "mongodb://" + config.dbuser + ":" + config.dbpass + "@" + config.dbhost + ":27017/" + config.db;
        mongoClient.connect(mongodb_url, function(err, db) {
            if( err ) {
                console.log(err);
            }
            var collection = db.collection('buckets');
            collection.find({}).toArray(function(err, result) {
                if( err ) {
                    console.log(err);
                }
	        res.render('index', {"buckets": result});
            });
        });
});

app.listen(port,  function() {
	console.log("Listening on port: ", port);
});
