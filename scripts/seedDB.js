const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/book-worm-db');

const bookSeed = [
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
        name: 'Double entendre',
        definition:
            'a word or phrase open to two interpretations, one of which is usually risqué or indecent.',
        partOfSpeech: 'noun',
        origin: 'Conversation with a friend ',
        date: new Date(Date.now()),
    },
];

db.Word.remove({})
    .then(() => db.Word.collection.insertMany(bookSeed))
    .then((data) => {
        console.log(data.result.n + ' records inserted!');
        process.exit(0);
    })
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });
