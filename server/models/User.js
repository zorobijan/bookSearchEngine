const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
//reference activity 21
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

// set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

const User = model('User', userSchema);

module.exports = User;
