DROP PROCEDURE IF EXISTS `createActor`;

DELIMITER $$;
CREATE PROCEDURE createActor (IN p_name VARCHAR(64))
BEGIN

  INSERT INTO hollywood.actor (actor_name)
  VALUES (p_name);

  SELECT LAST_INSERT_ID() as actor_id;

END
