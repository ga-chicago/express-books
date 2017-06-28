var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    path = require('path'),
    session = require('express-session'),
    Book = require('./models/Book');
    require('./db/db.js');

app.use(session( {
  secret: "I'm a secret password",
  resave: false,
  saveUninitialized: true,
  cookie: {secure: false}
}));

var BookController = require('./controllers/BookController');
var UserController = require('./controllers/UserController');
var ReviewController = require('./controllers/ReviewController');


app.use('/books', BookController);
app.use('/users', UserController);
app.use('/reviews', ReviewController);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

server.listen(3000, function(){
  console.log('listening on port 3000');
})
