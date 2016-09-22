var express = require('express');

//Express instance
var app = express();

//server port
var port = process.env.PORT || 5000;

//Variable for Navigator
var nav = [{
    Link: '/Books',
    Text: 'BOOK'
}, {
    Link: '/Authors',
    Text: 'AUTHOR'
}];

//Adding static files
app.use(express.static(__dirname + '/public'));

//setting View engine for EJS
app.set('views', './src/views');
app.set('view engine', '.ejs');

//Importing bookRouter routes | passing nav as function
var bookRouter = require('./src/routes/bookRoutes')(nav);

//Importing Admin Routes
var adminRouter = require('./src/routes/adminRoutes')(nav);

//Assigning Router for
app.use('/Books', bookRouter);
app.use('/Admin', adminRouter);
//homepage render
app.get('/', function(req, res) {
    res.render('index', {
                title: 'Hello From render',
                nav: [{Link: '/Books', Text: 'BOOKS'},
                      {Link: '/Authors', Text: 'AUTHORS'}]
                });
});

app.listen(port, function(err) {
    console.log('running server on port:', port);
});