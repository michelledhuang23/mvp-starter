var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'blogger'
});

var selectByID = function(id, callback) {
  connection.query(`SELECT * FROM posts WHERE user_id = ${id} ORDER BY created_at DESC`, function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

var createPost = function(post, callback) {
  connection.query(`INSERT INTO posts (user_id, user_name, content, tags) VALUES (${post.user_id}, "${post.user_name}", "${post.content}", "${post.tags}");`, function(err, results, fields) {
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
