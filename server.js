const express = require('express');
var cors = require('cors')
const app = express();
var bodyParser = require('body-parser')

app.use(cors())
app.use( bodyParser.json() );

app.get('/', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ a: 1 }));
})

app.post('/save', function (req, res) {
    console.log ('here is the req ');
    console.log (req);
    var state = req.body.state;
    res.send('saved it ' + state);
});

app.set('port', 8080);
app.listen(app.get('port'), function() {
    console.log('Node App Started');
});
