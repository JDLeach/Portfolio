const express = require('express'),
	app = express();

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	res.render('landingpage');
});

app.listen(3000, '127.0.0.1', function() {
	console.log('server online');
});
