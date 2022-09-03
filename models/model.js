const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  ImageLink: 'https://imgur.com',
  Name: 'methane',
  FunctionalGroup: ['a', 'b', 'c'],
  Difficulty: 'easy',
})

module.exports = mongoose.model('Data', dataSchema)