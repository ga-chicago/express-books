var express = require('express');
var router = express.Router();
var Review = require('../models/Review');
var Book = require('../models/Book');
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: true}));

// post request to /reviews
router.post('/', function(request, response){
  // grab the text from the request body and save it as a new
  // review
  var reviewText = request.body.text;
  var review = new Review({text: reviewText});
  review.save();

  // get the id of the book that was reviewed
  var bookId = request.body.bookId;
  // grab the book with that id and
  Book.findById(bookId, function(error, book){
    // get the mongoose id of the recently saved review
    var reviewId = review.id
    // push the review id in to the book review array
    book.reviews.push(reviewId);
    book.save();
    response.redirect(request.get('referer'));
  })
})

module.exports = router;
