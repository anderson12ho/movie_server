DROP PROCEDURE IF EXISTS `updateActor`;

DELIMITER $$;
CREATE PROCEDURE updateActor (IN p_actor_id INT,
                              IN p_name DATE)
BEGIN

  UPDATE hollywood.actor
  SET actor_name = p_actor_name
  WHERE actor_id = p_actor_id;

  SELECT * FROM hollywood.actor WHERE actor_id = p_actor_id;

END
