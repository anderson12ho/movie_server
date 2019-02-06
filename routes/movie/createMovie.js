const mydb = require('../../db_connection');

const db = mydb({});


function createMovie(req, res) {
  const title = req.body.title;
  const date = req.body.date;

  if (!title || !date) {
    res.status(400).json({
      error: 'missing required fields'
    });
    return;
  }

  db.getConnectionAsync()
  .then((conn) => {
    return conn.queryAsync('CALL createMovie(?, ?)', [title, date])
    .then((result) => {
      res.status(200).json({
        movie_id: result[0][0].movie_id,
        movie_title: title,
        release_date: date,
      });
      conn.release();
    })
  })

}

module.exports = createMovie;
