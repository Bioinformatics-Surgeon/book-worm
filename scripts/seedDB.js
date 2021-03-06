const mongoose = require('mongoose');
const db = require('../models');

const url = process.env.MONGODB_URI || 'mongodb://localhost/book-worm-db';
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const wordSeed = [
    {
        name: 'cadence',
        definition: 'a modulation or inflection of the voice.',
        partOfSpeech: 'noun',
        origin: 'Slack message at work',
        date: new Date(Date.now()),
    },
    {
        name: 'furlough',
        definition:
            'leave of absence, especially that granted to a member of the armed services.',
        partOfSpeech: 'noun',
        origin: 'A news article',
        date: new Date(Date.now()),
    },
    {
        name: 'halcyon',
        definition:
            'denoting a period of time in the past that was idyllically happy and peaceful.',
        partOfSpeech: 'adjective',
        origin: 'Slack message at work',
        date: new Date(Date.now()),
    },
    {
        name: 'antithesis',
        definition:
            'a person or thing that is the direct opposite of someone or something else.',
        partOfSpeech: 'noun',
        origin: 'Read it online',
        date: new Date(Date.now()),
    },
    {
        name: 'synecdoche',
        definition:
            "a figure of speech in which a part is made to represent the whole or vice versa, as in Cleveland won by six runs (meaning “Cleveland's baseball team”).",
        partOfSpeech: 'noun',
        origin: 'Conversation with a friend',
        date: new Date(Date.now()),
    },
    {
        name: 'metonymy',
        definition:
            'the substitution of the name of an attribute or adjunct for that of the thing meant, for example suit or business executive, or the track for horse racing.',
        partOfSpeech: 'noun',
        origin: 'Reading online',
        date: new Date(Date.now()),
    },
    {
        name: 'double entendre',
        definition:
            'a word or phrase open to two interpretations, one of which is usually risqué or indecent.',
        partOfSpeech: 'noun',
        origin: 'Conversation with a friend ',
        date: new Date(Date.now()),
    },
    {
        name: 'zilch',
        definition: 'nothing',
        partOfSpeech: 'pronoun',
        origin: 'Conversation with a friend ',
        date: new Date(Date.now()),
    },
    {
        name: 'precocious',
        definition:
            '(of a child) having developed certain abilities or proclivities at an earlier age than usual.',
        partOfSpeech: 'adjective',
        origin: 'Read it in a book',
        date: new Date(Date.now()),
    },
    {
        name: 'ardent',
        definition: 'enthusiastic or passionate.',
        partOfSpeech: 'adjective',
        origin: 'Read it online',
        date: new Date(Date.now()),
    },
    {
        name: 'conviviality',
        definition: 'the quality of being friendly and lively; friendliness.',
        partOfSpeech: 'noun',
        origin: 'Read online',
        date: new Date(Date.now()),
    },
    {
        name: 'torpid',
        definition: 'mentally or physically inactive; lethargic.',
        partOfSpeech: 'adjective',
        origin: 'Read it online',
        date: new Date(Date.now()),
    },
    {
        name: 'myopic',
        definition: 'nearsighted',
        partOfSpeech: 'adjective',
        origin: 'The Gene By Siddhartha Mukherjee',
        date: new Date(Date.now()),
    },
];

db.Word.deleteMany({})
    .then(() => db.Word.collection.insertMany(wordSeed))
    .then((data) => {
        console.log(data.result.n + ' records inserted!');
        process.exit(0);
    })
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });
