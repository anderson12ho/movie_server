DROP PROCEDURE IF EXISTS `createMovie`;

DELIMITER $$;
CREATE PROCEDURE createMovie (IN p_title VARCHAR(64),
                              IN p_release_date DATE)
BEGIN

  INSERT INTO hollywood.movie (movie_title, release_date)
  VALUES (p_title, p_release_date);

  SELECT LAST_INSERT_ID() as movie_id;

END
