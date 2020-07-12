import axios from 'axios';

export default {
    // GETS ALL words
    getWords: function () {
        return axios.get('/api/words');
    },

    // GETS word by id
    getWord: function (id) {
        return axios.get('/api/words/' + id);
    },

    // SAVES word
    saveWord: function (wordData) {
        return axios.post('/api/words', wordData);
    },

    // UPDATES word by id
    updateWord: function (id, wordData) {
        return axios.put('/api/words' + id, wordData);
    },

    // DELETES word by id
    deleteWord: function (id) {
        return axios.delete('/api/words/' + id);
    },
};
