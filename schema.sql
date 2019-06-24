DROP DATABASE IF EXISTS blogger;

CREATE DATABASE blogger;

USE blogger;

CREATE TABLE posts (
  post_id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  user_id int NOT NULL,
  content text,
  tags varchar(255)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
