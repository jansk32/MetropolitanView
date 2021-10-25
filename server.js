const express = require('express');
const axios = require('axios');

var app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

var port = process.env.PORT || 8080;

app.get("/", async function (req,res) {
    var tmp = await axios("https://collectionapi.metmuseum.org/public/collection/v1/search?q=sunflowers")
    .then((resp) => res.send(resp.data.objectIDs))
    .catch((err) => res.send(err))

})

app.listen(port, () => {
    console.log("Listening to port " + port)
})