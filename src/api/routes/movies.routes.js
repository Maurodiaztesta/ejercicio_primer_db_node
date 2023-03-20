const express = require('express');

const router = express.Router();

const {getMovie, postMovie, putMovie, deleteMovie, getMovieById, getMovieByTitle, getMovieByGenre, getMovieByYear} = require('../controllers/movies.controllers');

router.get('/', getMovie);

router.get('/id/:id', getMovieById);

router.get('/title/:title', getMovieByTitle);

router.get('/genre/:genre', getMovieByGenre);

router.get('/year/:year', getMovieByYear);

router.post('/', postMovie);

router.put('/:id', putMovie);

router.delete('/:id', deleteMovie);

module.exports = router;
