const express = require('express');
const Map = express.Router();

Map.get('/Maplatlng', (req, res) => {
    let latlng = [
{ "id": 22, "title": "Moving" },
        { "id": 4, "title": "Stopped" },
        { "id": 3, "title": "Idle" },
        { "id": 2, "title": "No Gps" },
        { "id": 0, "title": "Not Polled" },
        { "id": 1, "title": "All" }
    ];
    res.send(latlng);
});
module.exports = Map;



