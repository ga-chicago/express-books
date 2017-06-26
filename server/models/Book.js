var mongoose = require('mongoose');

var BookSchema = new mongoose.Schema({
  name: String,
  pages: Number,
  author: String,
  isbn: String
});

var bookModel = mongoose.model('Book', BookSchema);

module.exports = bookModel;
