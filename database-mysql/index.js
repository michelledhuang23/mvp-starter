var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'blogger'
});

var selectByID = function(id, callback) {
  connection.query(`SELECT * FROM posts WHERE user_id = ${id}`, function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports = {
  selectByID
};
