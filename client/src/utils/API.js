import axios from "axios";

export default {
  // Gets all books
  getWords: function () {
    return axios.get("/api/words");
  },
  // Gets the book with the given id
  getWord: function (id) {
    return axios.get("/api/words/" + id);
  },
  // Deletes the book with the given id
  deleteWord: function (id) {
    return axios.delete("/api/words/" + id);
  },
  // Saves a book to the database
  saveWord: function (wordData) {
    return axios.post("/api/words", wordData);
  },
};
