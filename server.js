/* initialize server variables */
const express = require("express"); // init express
const mongoose = require("mongoose"); // init mongoose
const routes = require("./routes"); // import routes
const PORT = process.env.PORT || 3001; // inti PORT
const app = express(); // store express() method

/* define middleware */
app.use(express.urlencoded({ extended: true })); // init urlencoding parser
app.use(express.json()); // init JSON parser

/* serve static assets */
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// add routes
app.use(routes);

// connect mongo "book-worm-db"
const url = process.env.MONGODB_URI || "mongodb://localhost/book-worm-db";
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

// spin up server
app.listen(PORT, function () {
  console.log(`🌎  ==> server now listening on PORT ${PORT}!`);
});
