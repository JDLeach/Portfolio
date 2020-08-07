const express = require('express'),
	app = express();

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/public/images'));

// INDEX ROUTE
app.get('/', (req, res) => {
	res.render('landingpage');
});

// ABOUT ME SHOW ROUTE
app.get('/aboutme', (req, res) => {
	res.render('aboutme');
});

// RESUME SHOW ROUTE
app.get('/resume', (req, res) => {
	res.render('resume');
});

// Wildcard route

app.listen(3000, '127.0.0.1', function() {
	console.log('server online');
});
