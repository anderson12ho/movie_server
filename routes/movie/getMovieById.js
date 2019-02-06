const mydb = require('../../db_connection');

const db = mydb({});


function getMovieById(req, res) {

  const movie_id = req.params.id;

  db.getConnectionAsync()
  .then((conn) => {
    return conn.queryAsync(`
      select * from movie m
      join vw_cast c on m.movie_id = c.movie_id
      where m.movie_id = ?`, movie_id)
    .then((data) => {

      if(data.length == 0) {
        res.status(404).json({
          error: 'movie not found'
        })
        conn.release();
        return;
      }

      console.log(data);
      const cast = data.map(record => {
        return {
          actor_id: record.actor_id,
          name: record.actor_name,
        };
      });

      res.status(200).json({
          movie_id: data[0].movie_id,
          movie_title: data[0].movie_title,
          release_date: data[0].release_date,
          cast: cast
        });
       conn.release();
    })

  })

}

module.exports = getMovieById;
