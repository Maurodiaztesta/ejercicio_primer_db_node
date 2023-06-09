const mongoose = require('mongoose');

const Movie = require('../api/models/movies.model');

const dotenv = require("dotenv").config();
const DB_URL = process.env.DB_URL;

const arrayMovies = [
    {
        title: 'The Matrix',
        director: 'Hermanas Wachowski',
        year: 1999,
        genre: 'Acción',
      },
      {
        title: 'The Matrix Reloaded',
        director: 'Hermanas Wachowski',
        year: 2003,
        genre: 'Acción',
      },
      {
        title: 'Buscando a Nemo',
        director: 'Andrew Stanton',
        year: 2003,
        genre: 'Animación',
      },
      {
        title: 'Buscando a Dory',
        director: 'Andrew Stanton',
        year: 2016,
        genre: 'Animación',
      },
      {
        title: 'Interestelar',
        director: 'Christopher Nolan',
        year: 2014,
        genre: 'Ciencia ficción',
      },
      {
        title: '50 primeras citas',
        director: 'Peter Segal',
        year: 2004,
        genre: 'Comedia romántica',
      },
]

mongoose.connect('mongodb+srv://prueba:prueba@cluster0.afnngdv.mongodb.net/movies?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(async () => {
    const allMovies = await Movie.find();
    if (allMovies.lenght) {
        await Movie.collection.drop()
        console.log("Peliculas borradas");
    };
}).catch((err) => console.log("Error borrando peliculas", err)).then(async () => {
    const moviesMap = arrayMovies.map((movie) => new Movie (movie));
    await Movie.insertMany(moviesMap);
    console.log("Movies insertadas");
}).catch((err) => console.log("Error insertando peliculas", err))
.finally(() => mongoose.disconnect());
