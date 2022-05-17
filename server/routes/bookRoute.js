const express = require('express');
const router = express.Router();
const Book = require('../models/bookModel');

router.route('/create').post((req, res) => {
    const title = req.body.title;
    const author = req.body.author;
    const description = req.body.description;
    const newBook = new Book({
        title,
        author,
        description
    });

    newBook.save().then(console.log('create book: ' + res.statusCode));
});

router.route('/books').get((req, res) => {
    Book.find()
        .then(foundBooks => res.json(foundBooks));
})

router.route('/delete/:id').delete((req, res) => {
    Book.deleteOne({ _id: req.params.id })
        .then(console.log('delete book: ' + res.statusCode));
})

router.route('/edit/:id').put((req, res) => {
    Book.updateOne({ _id: req.params.id }, req.body)
        .then(console.log('edit book: ' + res.statusCode));
})

module.exports = router;