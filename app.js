var express = require('express');

//Express instance
var app = express();

//server port
var port = process.env.PORT || 5000;

//Adding static files
app.use(express.static(__dirname + '/public'));

//setting View engine for EJS
app.set('views', './src/views');
app.set('view engine', '.ejs');

app.get('/', function(req, res) {
    res.render('index', {title: 'Hello From render', list: ['BOOKS', 'ABOUT']});
});

app.listen(port, function(err) {
    console.log('running server on port:', port);
});