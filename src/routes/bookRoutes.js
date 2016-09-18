var express = require('express');

//Adding Routing
var bookRouter = express.Router();

//Temperary Books
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

bookRouter.route('/')
    .get(function(req, res) {
        res.render('bookListView', {
            title: 'Hello From Books',
            nav: [{Link: '/Books', Text: 'BOOKS'},
                {Link: '/Authors', Text: 'AUTHORS'}],
            books: books
        });
    });

bookRouter.route('/:id')
    .get(function(req, res) {
        var id = req.params.id;
        res.render('bookView', {
            title: 'Exact Book',
            nav: [{Link: '/Books', Text: 'BOOKS'},
                {Link: '/Authors', Text: 'AUTHORS'}],
            book: books[id]
        });
    });

module.exports = bookRouter;