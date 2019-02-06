const express = require('express');
const router = express.Router();

const baseRoute = require('./baseRoute');
const getMovies = require('./movie/getMovies');
const createMovie = require('./movie/createMovie');
const getMoviesById = require('./movie/getMovieById');
const updateMovie = require('./movie/updateMovie');
const addActor = require('./movie/addActor');

const getActors = require('./actor/getActors');
const createActor = require('./actor/createActor');
const getActorById = require('./actor/getActorById');
const updateActor = require('./actor/updateActor');

router.get('/', baseRoute);
router.get('/movie', getMovies);
router.get('/movie/:id', getMoviesById);
router.post('/movie', createMovie);
router.post('/movie/:id/actor', addActor);
router.put('/movie/:id', updateMovie);

router.get('/actor', getActors);
router.get('/actor/:id', getActorById);
router.post('/actor', createActor);
router.put('/actor/:id', updateActor);

module.exports = router;
