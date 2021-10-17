const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: 'Title is required',
    minlength: 5,
    maxlength: 250,
  },
  body: {
    type: String,
    required: 'Body is required',
    minlength: 5,
    maxlength: 2500,
  },
});

module.exports = mongoose.model('Post', postSchema);
