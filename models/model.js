const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  ImageLink: String,
  Name: String,
  FunctionalGroup: { type: [String], default: undefined },
  Difficulty: String,
});

module.exports = mongoose.model("Data", dataSchema);
