const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  ImageLink: {String},
  Name: {String},
  FunctionalGroup: [String],
  Difficulty: {String},
})

module.exports = mongoose.model('Data', dataSchema)