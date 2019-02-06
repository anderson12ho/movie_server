CREATE DATABASE IF NOT EXISTS `hollywood`;

use hollywood;

CREATE TABLE movie (
  movie_id INT NOT NULL AUTO_INCREMENT,
  movie_title VARCHAR(64) NOT NULL,
  release_date DATE NOT NULL,
  PRIMARY KEY (movie_id)
);

CREATE TABLE actor (
  actor_id INT NOT NULL AUTO_INCREMENT,
  actor_name VARCHAR(64) NOT NULL,
  PRIMARY KEY (actor_id)
);

CREATE TABLE cast (
  movie_id INT NOT NULL,
  actor_id INT NOT NULL,
  FOREIGN KEY (movie_id) REFERENCES movie(movie_id),
  FOREIGN KEY (actor_id) REFERENCES actor(actor_id),
  PRIMARY KEY (movie_id, actor_id)
);
