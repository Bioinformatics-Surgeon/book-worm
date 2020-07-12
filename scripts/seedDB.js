const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/book-worm-db");

const bookSeed = [
  {
    name: "cadence",
    definition: "a modulation or inflection of the voice.",
    partOfSpeech: "noun",
    origin: "Slack message at work",
    date: new Date(Date.now()),
  },
  {
    name: "furlough",
    definition:
      "leave of absence, especially that granted to a member of the armed services.",
    partOfSpeech: "noun",
    origin: "A news article",
    date: new Date(Date.now()),
  },
  {
    name: "halcyon",
    definition:
      "denoting a period of time in the past that was idyllically happy and peaceful.",
    partOfSpeech: "adjective",
    origin: "Slack message at work",
    date: new Date(Date.now()),
  },
];

db.Word.remove({})
  .then(() => db.Word.collection.insertMany(bookSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
