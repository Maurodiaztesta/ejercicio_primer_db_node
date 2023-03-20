const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cineSchema = new Schema(
    {
        nombre: {type: String, required: true},
        ciudad: {type: String, required: true},
        movies: [{type: Schema.Types.ObjectId, ref: "movie"}]

    }, {
        timestamps: true
    }
)

const Cine = mongoose.model('cine', cineSchema);

module.exports = Cine;