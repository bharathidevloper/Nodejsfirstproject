const express = require('express');
const app = express();
const login_route = require('./routefolder/login');
const map_latlng = require('./routefolder/MapUrl');

const port = process.env.PORT || 8080;
app.listen(port, console.log("Server is running on 8080 port"));

app.use(express.json());

app.use('/api', login_route);
app.use('/api', map_latlng);

app.get('/', (req, res) => {

    res.send("Web service is running");
})