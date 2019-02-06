DROP PROCEDURE IF EXISTS `updateMovie`;

DELIMITER $$;
CREATE PROCEDURE updateMovie (IN p_movie_id INT,
                              IN p_release_date DATE)
BEGIN

  UPDATE hollywood.movie
  SET release_date = p_release_date
  WHERE movie_id = p_movie_id;

  SELECT * FROM hollywood.movie WHERE movie_id = p_movie_id;

END
