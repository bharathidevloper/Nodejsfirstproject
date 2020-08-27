const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
    console.log(req.body.usernam);
    if (req.body.usernam == "bharathi" && req.body.password == "pswd") {
        res.send("success");
    }
    else {
        res.send("failed");
    }

})

module.exports = router;


