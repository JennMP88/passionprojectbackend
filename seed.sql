DROP DATABASE IF EXISTS passionproject;
CREATE DATABASE passionproject;

\c passionproject

Create Table users (
  id SERIAL PRIMARY KEY,
  username VARCHAR NOT NULL
);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    comment_body VARCHAR NOT NULL,
    user_id INT REFERENCES users(id)
);

-- INSERT USERS
INSERT INTO users (username) VALUES ('Jen');
INSERT INTO users (username) VALUES ('Luke');
INSERT INTO users (username) VALUES ('Marcos');

--INSER COMMENT
INSERT INTO comments (comment_body, user_id) VALUES ('do not worry be happy',1);
INSERT INTO comments (comment_body, user_id) VALUES ('every little thing is gonna be alright',1);
INSERT INTO comments (comment_body, user_id) VALUES ('are you qouting bob marley?',2);
