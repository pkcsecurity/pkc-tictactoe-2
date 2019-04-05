const express = require('express');
var cors = require('cors')
const app = express();

app.use(cors())

app.get('/', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ a: 1 }));
})

app.set('port', 8080);
app.listen(app.get('port'), function() {
    console.log('Node App Started');
});