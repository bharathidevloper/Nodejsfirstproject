const express = require('express');
const app = express();
const login_route = require('./routefolder/login');

const port = process.env.PORT || 8080;
app.listen(port, console.log("Server is running on 8080 port"));

app.use(express.json());

app.use('/api', login_route);

app.get('/api', (req, res) => {

    res.send("Web service is running");
})