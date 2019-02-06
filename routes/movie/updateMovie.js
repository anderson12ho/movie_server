const mydb = require('../../db_connection');

const db = mydb({});


function updateMovie(req, res) {
  const movie_id = req.params.id;
  const date = req.body.release_date;

  if (!movie_id || !date) {
    res.status(400).json({
      error: 'missing required fields'
    });
    return;
  }

  db.getConnectionAsync()
  .then((conn) => {
    return conn.queryAsync('CALL updateMovie(?, ?)', [movie_id, date])
    .then((result) => {
      res.status(200).json({
        movie_id: result[0][0].movie_id,
        movie_title: result[0][0].movie_title,
        release_date: result[0][0].release_date,
      });
      conn.release();
    })
  })

}

module.exports = updateMovie;
