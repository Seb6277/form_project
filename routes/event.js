const express = require('express');
const router = express.Router();

router.get('/places', (req, res) => {
    res.json({
        total_places: 10,
        envent_name: "Foire à la saucisse"
    });
});

module.exports = router;