const mydb = require('../../db_connection');

const db = mydb({});


function getMovies(req, res) {

  const start = req.query.start;
  const end = req.query.end;

  let query = 'select * from movie';

  if (start && end) {
    query += ` where release_date between '${start}' and '${end}'`;
  }

  db.getConnectionAsync()
  .then((conn) => {
    return conn.queryAsync(query)
    .then((data) => {
      res.status(200).json({
        movies: data,
      });
      conn.release();
    });
  })

}

module.exports = getMovies;
