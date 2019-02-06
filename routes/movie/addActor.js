const mydb = require('../../db_connection');

const db = mydb({});


function addActor(req, res) {
  const actor_id = req.body.actor_id;
  const movie_id = req.params.id;


  if (!movie_id || !actor_id) {
    res.status(400).json({
      error: 'missing required fields'
    });
    return;
  }

  db.getConnectionAsync()
  .then((conn) => {
    return conn.queryAsync('CALL addActorToMovie(?, ?)', [movie_id, actor_id])
    .then(() => {

      res.sendStatus(200);
      conn.release();

    })
  })

}

module.exports = addActor;
