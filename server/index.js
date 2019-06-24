var express = require('express');
var bodyParser = require('body-parser');
const path = require('path');
const port = 3000;
var db = require('../database-mysql');

var app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../react-client/dist')));

app.get('/blog/:id', (req, res) => {
  res.sendFile(path.join(__dirname, '../react-client/dist/index.html'));
});

app.get('/posts/:id', function (req, res) {
  const id = req.params.id;
  db.selectByID(id, function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.post('/posts', function (req, res) {
  const post = req.body;
  console.log(post);
  db.createPost(post, function(err, data) {
    if(err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.listen(port, function() {
  console.log(`listening on port ${port}!`);
});

