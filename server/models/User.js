const { Schema, model } = require('mongoose');

const bookSchema = require('./Book')

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    match: /.+\@.+\..+/,
    unique: true,
  },
  password: {
    type: Number,
    default: 0,
  },
  savedBooks: {
    type: Number,
    default: 0,
  },
});

const Matchup = model('Matchup', matchupSchema);

module.exports = Matchup;
