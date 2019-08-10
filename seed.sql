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

CREATE TABLE stories (
  id SERIAL PRIMARY KEY,
  stories_displayed VARCHAR NOT NULL,
  user_id INT REFERENCES users(id) 
);

-- INSERT USERS
INSERT INTO users (username) VALUES ('Jen');
INSERT INTO users (username) VALUES ('Luke');
INSERT INTO users (username) VALUES ('Marco');

--INSERT STORY 
  INSERT INTO stories (stories_displayed, user_id) VALUES ('prayer 1',1);
  INSERT INTO stories (stories_displayed, user_id) VALUES ('prayer 2',1);
  INSERT INTO stories (stories_displayed, user_id) VALUES ('prayer 3',2);

--INSERT COMMENT
INSERT INTO comments (comment_body, user_id) VALUES ('do not worry be happy',1);
INSERT INTO comments (comment_body, user_id) VALUES ('every little thing is gonna be alright',1);
INSERT INTO comments (comment_body, user_id) VALUES ('are you quoting bob marley?',2);
