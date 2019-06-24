DROP DATABASE IF EXISTS blogger;

CREATE DATABASE blogger;

USE blogger;

CREATE TABLE users (
  user_id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  user_name varchar(100)
);

CREATE TABLE posts (
  post_id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  user_id int NOT NULL,
  content text,
  tags varchar(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id)
      REFERENCES users(user_id)
      ON DELETE CASCADE
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/
