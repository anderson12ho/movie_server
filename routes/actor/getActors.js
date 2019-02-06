const mydb = require('../../db_connection');

const db = mydb({});


function getActors(req, res) {

  const year = req.query.year;

  let query = 'Select * from actor a';

  if (year) {
    query = 'select actor_id, actor_name from vw_cast';
    query += ` where release_date between '${year}-01-01' and '${year}-12-31';`;
  }

  db.getConnectionAsync()
  .then((conn) => {
    return conn.queryAsync(query)
    .then((data) => {
      res.status(200).json({
        actors: data,
      });
      conn.release();
    });
  })

}

module.exports = getActors;
