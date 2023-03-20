const express = require('express');
const {connect} = require('./src/utils/database');
const routerMovies = require('./src/api/routes/movies.routes');

const PORT = 8000;

const app = express();
connect();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/movies', routerMovies);

app.listen(PORT, () => console.log(`Listening on: http://localhost:${PORT}`));