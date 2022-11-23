const { Schema, model } = require('mongoose');

const bookSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

const Book = model('Book', bookSchema);

module.exports = Book;
