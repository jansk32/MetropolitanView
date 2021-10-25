const express = require('express');
const axios = require('axios');

var app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
var objIds = {}

var port = process.env.PORT || 8080;

// get ids with primary image 
app.get("/", async function (req,res) {
    var tmp = await axios("https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=6&q=cat&hasImages=true")
    .then((resp) => res.send(resp.data.objectIDs))
    .catch((err) => res.send(err))

})

app.get("/:id", async function(req,res) {
    var tmp = await axios("https://collectionapi.metmuseum.org/public/collection/v1/objects/" + req.params.id)
    .then((resp) => res.send(resp.data))
    .catch((err) => res.send(err))

})


app.listen(port, () => {
    console.log("Listening to port " + port)
})