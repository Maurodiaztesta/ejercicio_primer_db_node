const mongoose = require('mongoose');

// const DB_URL = "mongodb://127.0.0.1:27017/mauro";
const DB_URL = "mongodb+srv://prueba:prueba@cluster0.afnngdv.mongodb.net/movies?retryWrites=true&w=majority";

const connect = async () => {

    try {
        const db = await mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        const {name, host} = db.connection;
        console.log(`Conected to ${name} DB in host: ${host}`);

    } catch (error) {
        console.log(`He tenido un error al conectar con mi BBDD: ${error}`);
    }
}

module.exports = {connect}