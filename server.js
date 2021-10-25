const express = require('express');
const axios = require('axios');

var app = express();

var port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log("Listening to port " + port)
})