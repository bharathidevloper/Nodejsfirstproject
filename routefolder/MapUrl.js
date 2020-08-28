const express = require('express');
const Map = express.Router();

Map.get('/Maplatlng', (req, res) => {
    let latlng = [
        { latitude: 16.004875, longitude: 79.759841 },

        { latitude: 16.005937, longitude: 79.752696 },

    ];
    res.send(latlng);
});
module.exports = Map;



