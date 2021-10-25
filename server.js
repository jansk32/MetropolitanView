const express = require('express');
const axios = require('axios');

var app = express();

var objIds = []

// get ids with primary image 
app.get("/", function (req,res) {
    axios("https://collectionapi.metmuseum.org/public/collection/v1/search?q=sunflowers")
    .then((data) => console.log(data))
    .catch((err) => console.log(err))

})

app.get("/arts", function(req,res) {

})

var port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log("Listening to port " + port)
})