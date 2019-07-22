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
  INSERT INTO stories (stories_displayed, user_id) VALUES ('i applied to Google, filled out a coding challenge and cursed a lady out on my way to my interview, next thing i knew, the same lady i cursed out was the person who interviewed me. we all know how that ended',1);
  INSERT INTO stories (stories_displayed, user_id) VALUES ('just got rejected by Google',1);
  INSERT INTO stories (stories_displayed, user_id) VALUES ('Left a job on hold while i negotiated a salary and next thing i knew they hired some one else',2);

--INSERT COMMENT
INSERT INTO comments (comment_body, user_id) VALUES ('do not worry be happy',1);
INSERT INTO comments (comment_body, user_id) VALUES ('every little thing is gonna be alright',1);
INSERT INTO comments (comment_body, user_id) VALUES ('are you quoting bob marley?',2);
