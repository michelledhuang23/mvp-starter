var express = require('express');
var bodyParser = require('body-parser');
const path = require('path');
const port = 3000;
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
// var items = require('../database-mongo');

var app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../react-client/dist')));

app.get('/blog/:id', (req, res) => {
  res.sendFile(path.join(__dirname, '../react-client/dist/index.html'));
});

app.get('/posts/:id', function (req, res) {
  console.log('hello');
  res.status(200).send();
  // items.selectAll(function(err, data) {
  //   if(err) {
  //     res.sendStatus(500);
  //   } else {
  //     res.json(data);
  //   }
  // });
});

app.listen(port, function() {
  console.log(`listening on port ${port}!`);
});

