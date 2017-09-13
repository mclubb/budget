var express = require('express');
var session = require('express-session');
var bodyparser = require('body-parser');
var mongodb = require('mongodb');

var app = express();

var port = 8000;

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static('public'));

app.use(session({
	secret: 'money',
	cookie: {}
}));

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());



var ledger = require('./controllers/ledger');

app.use('/ledger', ledger);

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
	res.render('index');
});

app.listen(port,  function() {
	console.log("Listening on port: ", port);
});
