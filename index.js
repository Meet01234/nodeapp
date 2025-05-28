var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "Hello From Meet Parmar" }');
});

app.get('/will', function (req, res) {
    res.send('{ "response": "Hello World" }');
});

app.get('/ready', function (req, res) {
    res.send('{ "response": " Great!, It works!" }');
});

app.listen(process.env.PORT || 3000);
module.exports = app;

/*
======================
= Test using curl =
======================

1. Root endpoint:
   curl http://localhost:3000/
   Response: { "response": "Hello From Meet Parmar" }

2. /will endpoint:
   curl http://localhost:3000/will
   Response: { "response": "Hello World" }

3. /ready endpoint:
   curl http://localhost:3000/ready
   Response: { "response": " Great!, It works!" }

Note: Replace localhost with actual hostname or IP if testing remotely.
*/
