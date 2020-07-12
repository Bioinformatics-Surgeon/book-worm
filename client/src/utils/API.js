import axios from "axios";

export default {
  // gets all words
  getWords: function () {
    return axios.get("/api/words");
  },

  // gets word by id
  getWord: function (id) {
    return axios.get("/api/words/" + id);
  },

  // saves word
  saveWord: function (wordData) {
    return axios.post("/api/words", wordData);
  },

  // updates word by id
  updateWord: function (id, wordData) {
    return axios.put("/api/words" + id, wordData);
  },

  // deletes word by id
  deleteWord: function (id) {
    return axios.delete("/api/words/" + id);
  },
};
