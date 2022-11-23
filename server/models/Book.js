const { Schema, model } = require('mongoose');

const bookSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

const Tech = model('Tech', techSchema);

module.exports = Tech;
