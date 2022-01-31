CREATE TABLE movie_db.publications (name VARCHAR(250) PRIMARY KEY, avatar VARCHAR(250));
CREATE TABLE movie_db.reviewers (name VARCHAR(255) PRIMARY KEY, avatar VARCHAR(250), publication VARCHAR(250), FOREIGN KEY (publication) REFERENCES publication(name) ON DELETE CASCADE);
CREATE TABLE movie_db.movies (title VARCHAR(250) PRIMARY KEY, release VARCHAR(250), score INTEGER(11), reviewer VARCHAR(250), publication VARCHAR(250), FOREIGN KEY (reviewer) REFERENCES reviewers(name) ON DELETE CASCADE);
