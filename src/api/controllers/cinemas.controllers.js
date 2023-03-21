const Cine = require('../models/cinemas.model');

const getCine = async (rec, res) => {
    try {
        const allCines = await Cine.find();
        return res.status(200).json(allCines);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const getCineById = async (req, res) => {
    try {
        const {id} = req.params;
        const cine = await Cine.findById(id); //.populate("movies");
        if(!cine){
            return res.status(404).json({ "message": "cine not found"});
        }
        return res.status(200).json(cine);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const postCine = async (rec, res) => {
    try {
        console.log(rec.body);
        const newCine = new Cine(rec.body);
        const createdCine = await newCine.save();
        return res.status(201).json(createdCine);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const putCine = async (rec, res) => {
    try {
        const {id}=rec.params;
        const putCine = new Cine(req.body);
        putCine._id = id;

        const updateCine = await Cine.findByIdAndUpdate(id, putCine, {new: true}); 
        if(!updateCine){    
            return res.status(404).json({ "message": "movie not found"});
        }
        return res.status(200).json(updateCine);
    } catch (error) {
        return res.status(500).json(error);
    }
    
}

const deleteCine = async (rec, res) => {
    try {
        const {id} = rec.params;
        const cineDeleted = await Cine.findByIdAndDelete(id);
        return res.status(200).json(cineDeleted);
    } catch (error) {
        return res.status(500).json(error);
    }
}

module.exports = {getCine, postCine, putCine, deleteCine, getCineById};