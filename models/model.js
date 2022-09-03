const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  ImageLink: { type: String, required: true },
  Name: { type: String, required: true, lowercase: true },
  FunctionalGroup: {
    type: [String],
    required: true,
    default: [],
    lowercase: true,
  },
  Difficulty: { type: String, required: true, lowercase: true },
});

module.exports = mongoose.model("Data", dataSchema);
