const Movie = require("../models/movies.model");

const getMovie = async (rec, res) => {
    try {
        const allMovies = await Movie.find();
        return res.status(200).json(allMovies);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const getMovieById = async (rec, res) => {
    try {
        const {id} = rec.params;
        const allMovies = await Movie.findById(id);
        return res.status(200).json(allMovies);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const getMovieByTitle = async (rec, res) => {
    try {
        const {title} = rec.params;
        const allMovies = await Movie.find({title: title});
        return res.status(200).json(allMovies);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const getMovieByGenre = async (rec, res) => {
    try {
        const {genre} = rec.params;
        const allMovies = await Movie.find({genre: genre});
        return res.status(200).json(allMovies);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const getMovieByYear = async (rec, res) => {
    try {
        const {year} = rec.params;
        const allMovies = await Movie.find({year: { $gt : 2010 }});
        return res.status(200).json(allMovies);
    } catch (error) {
        return res.status(500).json(error);
    }
}


const postMovie = (rec, res) => {
    res.send('Este es mi post');
}

const putMovie = (rec, res) => {
    res.send('Este es mi put');
}

const deleteMovie = (rec, res) => {
    res.send('Este es mi delete');
}

module.exports = {getMovie, postMovie, putMovie, deleteMovie, getMovieById, getMovieByTitle, getMovieByGenre, getMovieByYear};