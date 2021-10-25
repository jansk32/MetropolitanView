const express = require('express');
const axios = require('axios');

var app = express();

var objIds = {}

// get ids with primary image 
app.get("/", async function (req,res) {
    var tmp = await axios("https://collectionapi.metmuseum.org/public/collection/v1/search?q=sunflowers")
    .then((resp) => res.send(resp.data.objectIDs))
    .catch((err) => res.send(err))

})

app.get("/:id", async function(req,res) {
    var tmp = await axios("https://collectionapi.metmuseum.org/public/collection/v1/objects/" + req.params.id)
    .then((resp) => res.send(resp.data))
    .catch((err) => res.send(err))

})

var port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log("Listening to port " + port)
})