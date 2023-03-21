const express = require('express');
const dotenv = require("dotenv").config()
const {connect} = require('./src/utils/database');
const routerMovies = require('./src/api/routes/movies.routes');
const routerCines = require('./src/api/routes/cinemas.routes');
const routerUsers = require('./src/api/routes/users.routes');

const PORT = process.env.PORT || 8000;


const app = express();
connect();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/movies', routerMovies);
app.use('/cines', routerCines);
app.use('/user', routerUsers);

app.listen(PORT, () => console.log(`Listening on: http://localhost:${PORT}`));