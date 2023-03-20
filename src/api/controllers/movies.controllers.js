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


const postMovie = async (rec, res) => {
    try {
        console.log(rec.body);
        const newMovie = new Movie(rec.body);
        const createdMovie = await newMovie.save();
        return res.status(201).json(createdMovie);

        // const newMovie = new Movie({
        //     title: rec.body.title,
        //     director: rec.body.director,
        //     year: rec.body.year,
        //     genre: rec.body.genre
        // });

        // const createdMovie = await newMovie.save();
        // return res.status(201).json(createdMovie);
        // res.send('Este es mi post');
    } catch (error) {
        return res.status(500).json(error);
    }
    
}

const putMovie = async (rec, res) => {
    try {
        const {id}=rec.params;
        const putMovie = new Movie(req.body);
        putMovie._id = id;

        const updateMovie = await Movie.findByIdAndUpdate(id, putMovie, {new: true}); 
        if(!updateMovie){    
            return res.status(404).json({ "message": "movie not found"});
        }
        return res.status(200).json(updateCliente);
    } catch (error) {
        return res.status(500).json(error);
    }
    
}

const deleteMovie = async (rec, res) => {
    try {
        const {id} = rec.params;
        const movieDeleted = await Movie.findByIdAndDelete(id);
        return res.status(200).json(movieDeleted);
    } catch (error) {
        return res.status(500).json(error);
    }
}

module.exports = {getMovie, postMovie, putMovie, deleteMovie, getMovieById, getMovieByTitle, getMovieByGenre, getMovieByYear};