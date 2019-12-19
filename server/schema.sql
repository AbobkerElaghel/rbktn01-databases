
USE chat;

CREATE TABLE messages (
  id int  PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(255) NOT NULL,
  message VARCHAR(255),
  roomname VARCHAR(255)
);

CREATE TABLE users (
  id int PRIMARY KEY,
  username VARCHAR(255),
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

