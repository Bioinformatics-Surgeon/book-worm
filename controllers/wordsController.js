const db = require('../models');

// Defining methods for the wordsController
module.exports = {
    findAll: function (req, res) {
        db.Word.find(req.query)
            .sort({ date: -1 })
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    },

    findAllOrigins: function (req, res) {
        console.log('here');
        db.Word.find(req.query);
        console
            .log('req', req)
            .then((dbModel) => console.log('here'))
            .catch((err) => res.status(422).json(err));
    },

    findById: function (req, res) {
        db.Word.findById(req.params.id)
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    },

    create: function (req, res) {
        db.Word.create(req.body)
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    },

    update: function (req, res) {
        db.Word.findOneAndUpdate({ _id: req.params.id }, req.body)
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    },

    remove: function (req, res) {
        db.Word.findById({ _id: req.params.id })
            .then((dbModel) => dbModel.remove())
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    },
};
