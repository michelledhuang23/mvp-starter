var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'blogger'
});

var selectByID = function(id, callback) {
  connection.query(`SELECT users.user_id AS user_id, users.user_name AS user_name, posts.content AS content, posts.tags AS tags, posts.created_at AS created_at FROM users INNER JOIN posts ON users.user_id = posts.user_id WHERE users.user_id = ${id} ORDER BY posts.created_at DESC;`, function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

var createPost = function(post, callback) {
  connection.query(`INSERT INTO posts (user_id, content, tags) VALUES (${post.user_id}, '${post.content}', '${post.tags}');`, function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports = {
  selectByID,
  createPost
};
