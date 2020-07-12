const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const wordSchema = new Schema({
  name: { type: String, required: true },
  definition: { type: String, required: true },
  partOfSpeech: { type: String, required: true },
  origin: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const Word = mongoose.model("Word", wordSchema);

module.exports = Word;
