const mydb = require('../../db_connection');

const db = mydb({});


function createActor(req, res) {
  const name = req.body.name;


  if (!name) {
    res.status(400).json({
      error: 'missing required fields'
    });
    return;
  }

  db.getConnectionAsync()
  .then((conn) => {
    return conn.queryAsync('CALL createActor(?)', [name])
    .then((result) => {

      res.status(200).json({
        actor_id: result[0][0].actor_id,
        actor_name: name
      });
      conn.release();

    })
  })

}

module.exports = createActor;
