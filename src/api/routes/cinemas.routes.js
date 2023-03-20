const express = require('express');

const {getCine, postCine, putCine, deleteCine,getCineById} = require('../controllers/cinemas.controllers');

const router = express.Router();

router.get('/', getCine);
router.get('/:id', getCineById);
router.post('/', postCine);
router.put('/:id', putCine);
router.delete('/:id', deleteCine);

module.exports = router;