const express = require('express');
const router = express.Router();

// User model
const User = require('../models/User');

router.get("/get_users", (req, res) => {
    User.find(function (err, items) {
        if (err) {
            console.log(err);
            res.end();
        } else {
            res.send(items);
            res.end();
        }
    });
});

router.post("/register", function (req, res) {
    if ((req.body.src !== null) && (req.body.header !== null)){
        const newUser = new User({
            "name": req.body.name,
            "lastname": req.body.lastname,
            "birthday": req.body.birthday,
            "passion": req.body.passion
        });
        newUser.save().then((item) => {
            res.status(201).json(item).end();
        }).catch(error => {
        console.log(error);
            res.status(500).end();
        });
    }
});

module.exports = router;