var express = require('express');

var app = express.createServer(express.logger());
var buffer = new Buffer(16);

buffer.readFileSync('index.html', function(err, data) {
    if(err) throw err;
    console.log(data);
});

buffer.toString('utf-8')


app.get('/', function(request, response) {
 // response.send('Hello World 2!');
 response.send('Hello World 2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
