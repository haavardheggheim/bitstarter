var express = require('express');

var app = express.createServer(express.logger());


app.get('/', function(request, response) {
    var fs = require('fs');
    var file = fs.readFileSync("index.html");


    response.send(file.toString('utf-8'));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
