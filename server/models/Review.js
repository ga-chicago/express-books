var mongoose = require('mongoose');

var ReviewSchema = new mongoose.Schema({
  text: String
});

module.exports = mongoose.model('Review', ReviewSchema);
