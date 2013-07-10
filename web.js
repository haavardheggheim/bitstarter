var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var buffer = new Buffer(16);

    var fs = require('fs');

response.send(buffer.toString('utf 8', fs.readFileSync("index.html")))
});

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
