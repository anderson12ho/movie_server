const mydb = require('../../db_connection');

const db = mydb({});


function updateActor(req, res) {
  const actor_id = req.params.id;
  const name = req.body.name;

  if (!movie_id || !date) {
    res.status(400).json({
      error: 'missing required fields'
    });
    return;
  }

  db.getConnectionAsync()
  .then((conn) => {
    return conn.queryAsync('CALL updateActor(?, ?)', [actor_id, name])
    .then((result) => {
      res.status(200).json({
        movie_id: result[0][0].actor_id,
        actor_name: result[0][0].actor_name,
      });
      conn.release();
    })
  })

}

module.exports = updateActor;
