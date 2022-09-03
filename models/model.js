const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  ImageLink: { type: String, required: true },
  Name: { type: String, required: true },
  FunctionalGroup: { type: Array, required: true, default: [] },
  Difficulty: { type: String, required: true },
});
