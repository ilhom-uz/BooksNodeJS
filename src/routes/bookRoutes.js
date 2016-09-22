var express = require('express');

//Adding Routing
var bookRouter = express.Router();
// MongoDB database client
var mongodb = require('mongodb').MongoClient;

var router = function(nav) {
    bookRouter.route('/')
        .get(function(req, res) {
            var url =
                'mongodb://localhost:27017/libraryApp';
            mongodb.connect(url, function(err, db) {
                var collection = db.collection('books');
                collection.find({}).toArray(function(err, results) {
                    res.render('bookListView', {
                        title: 'Hello From Books',
                        nav: nav,
                        books: results
                    });
                });
            });

        });

    bookRouter.route('/:id')
        .get(function(req, res) {
            var id = req.params.id;
            var url =
                'mongodb://localhost:27017/libraryApp';
            mongodb.connect(url, function(err, db) {
                var collection = db.collection('books');
                collection.find({}).toArray(function(err, results) {
                    res.render('bookListView', {
                        title: 'Hello From Books',
                        nav: nav,
                        books: results
                    });
                });
            });

        });

    return bookRouter;
};

module.exports = router;