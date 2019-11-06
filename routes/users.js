const express = require('express');
const router = express.Router();

router.get("/get_users", (req, res) => {
    res.json({
        users: {
            name: 'john',
            lastname: 'doe',
            birth: '24/01/89',
            passion: 'Marilyn Monroe'
        }
    });
});

module.exports = router;