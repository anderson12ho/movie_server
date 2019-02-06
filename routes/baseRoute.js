function baseRoute(req, res) {
  res.status(200).send('Hello, welcome to the movie database');
}

module.exports = baseRoute;
