DROP VIEW IF EXISTS `vw_cast`;

CREATE VIEW `vw_cast` AS
SELECT m.movie_id, m.movie_title, m.release_date, a.actor_id, a.actor_name
FROM cast c
JOIN movie m ON c.movie_id = m.movie_id
JOIN actor a ON c.actor_id = a.actor_id
