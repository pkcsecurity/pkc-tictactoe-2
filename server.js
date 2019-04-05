const express = require('express');
var cors = require('cors')
const app = express();
var bodyParser = require('body-parser')
var MongoClient = require('mongodb').MongoClient

app.use(cors())
app.use( bodyParser.json() );

app.get('/', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ a: 1 }));
})

app.post('/save', function (req, res) {
    var state = req.body;
    console.log (state);
    res.send('saved it ' + state);
  MongoClient.connect('mongodb://localhost:27017/tik', function (err, client) {
   if (err) throw err

  var db = client.db('tik')
 console.log ("1"); 
  db.collection('tik').insertOne( { state : state } );

 console.log ("2");
  db.collection('tik').find().toArray(function (err, result) {
    if (err) throw err

    console.log(result)
  }) 
})


});

app.set('port', 8080);
app.listen(app.get('port'), function() {
    console.log('Node App Started');
});
