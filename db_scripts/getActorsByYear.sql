DROP PROCEDURE IF EXISTS `getActorsByDate`;

DELIMITER $$;
CREATE PROCEDURE getActorsByDate (IN start_date date,
                                  IN end_date date)
BEGIN

  SELECT c.actor_id, c.actor_name
  FROM movie m
  JOIN vw_cast c on m.movie_id = c.movie_id
  WHERE m.release_date between start_date and end_date;

END
