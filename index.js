const express = require('express'),
	app = express();

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	res.render('landingpage');
});

app.listen(process.env.PORT || 3000, process.env.IP, function() {
	console.log('Server is online!');
});
