var express = require('express');

//Express instance
var app = express();

//server port
var port = process.env.PORT || 5000;

//Adding static files
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/ src/views'));

app.get('/', function(req, res) {
    res.send('Hello world');
});

app.listen(port, function(err) {
    console.log('running server on port:', port);
});