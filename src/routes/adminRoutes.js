var express = require('express');
//Adding Routing
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

var books = [
    {
        title: 'War and Peace',
        genre: 'Historical Fiction',
        author: 'Lev Tolstoy'
    },
    {
        title: 'Ruby on Rails',
        genre: 'Programming',
        author: 'Some Author'
    },
    {
        title: 'Les Miserables',
        genre: 'Historical Fiction',
        author: 'Victor Hugo'
    },
    {
        title: 'Les Miserables',
        genre: 'Historical Fiction',
        author: 'Victor Hugo'
    },
    {
        title: 'The Dark World',
        genre: 'Fantasy',
        author: 'Henry Kuttner'
    }
];

var router = function(nav) {
    adminRouter.route('/addbooks')
        .get(function(req, res) {
            var url =
                'mongodb://localhost:27017/libraryApp';
            mongodb.connect(url, function(err, db) { //Function ishlatvorishini tekshirish kere
                var collection = db.collection('books');
                collection.insertMany(books,
                    function(err, results) {
                    res.send(results);
                    db.close();
                });
            });

        });
    return adminRouter;
};

module.exports = router;
