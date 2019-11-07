const express = require('express');
const router = express.Router();

// Event model
const Event = require('../models/Event');

router.get('/places', (req, res) => {
    Event.find((err, items) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            res.send(items);
            res.end();
        }
    });
});

router.post('/create', (req, res) => {
    if ((req.body.name !== null) && (req.body.nbr_places !== null)) {
        const newEvent = new Event({
            "name": req.body.name,
            "nbr_places": req.body.nbr_places
        });
        newEvent.save().then((item) => {
            res.status(201).json(item).end();
        }).catch((error) => {
            console.log(error);
            res.status(500).end();
        });
    }
});

module.exports = router;