const express = require('express');
const router = express.Router();

router.get("/get_users", (req, res) => {
    res.json({work: "true"});
});

module.exports = router;