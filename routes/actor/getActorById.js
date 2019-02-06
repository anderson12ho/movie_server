const mydb = require('../../db_connection');

const db = mydb({});


function getActorById(req, res) {

  const actor_id = req.params.id;

  db.getConnectionAsync()
  .then((conn) => {
    return conn.queryAsync(
      `select * from actor a
      join vw_cast c on a.actor_id = c.actor_id
      where a.actor_id = ?`, actor_id)
    .then((data) => {

      if(data.length == 0) {
        res.status(404).json({
          error: 'actor not found'
        })
      } else {

        const movies = data.map(record =>  {
          return {
            movie_id: record.movie_id,
            movie_title: record.movie_title
          }
        });
        res.status(200).json({
          actor_id: data[0].actor_id,
          actor_name: data[0].actor_name,
          stars_in: movies,
        });
      }

      conn.release();
    });
  })

}

module.exports = getActorById;
