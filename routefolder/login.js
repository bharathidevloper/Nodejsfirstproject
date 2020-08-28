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
router.get('/userdetails/:id', (req, res) => {
    console.log(req.params.id);
    let user = {
        "username": "bharathi",
        "lastname": "nagulapati"

    }
    res.send(user);
})

module.exports = router;


