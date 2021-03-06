const mongoose = require('mongoose');

const booksSchema = {
    title: String,
    author: String,
    description: String
}

const Book = mongoose.model("Book", booksSchema);

module.exports = Book;