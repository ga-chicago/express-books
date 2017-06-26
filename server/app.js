var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    path = require('path'),
    Book = require('./models/Book');
    require('./db/db.js');

var BookController = require('./controllers/BookController');

app.use('/books', BookController);

server.listen(3000, function(){
  console.log('listening on port 3000');
})
