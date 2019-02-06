DROP PROCEDURE IF EXISTS `addActorToMovie`;

DELIMITER $$;
CREATE PROCEDURE addActorToMovie (IN p_movie_id INT,
                                  IN p_actor_id INT)
BEGIN

  INSERT INTO hollywood.cast (movie_id, actor_id)
  VALUES (p_movie_id, p_actor_id);

END
