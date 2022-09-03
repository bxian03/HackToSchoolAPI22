const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  ImageLink: {type:String},
  Name: {type:String},
  FunctionalGroup: [String],
  Difficulty: String,
})

module.exports = mongoose.model('Data', dataSchema)