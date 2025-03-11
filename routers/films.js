const express = require('express');
const router = express.Router();

// importiamo il controller 
const filmsController = require ("../controllers/filmsController")

// ROOT
router.get('/', filmsController.index);

router.get('/:id', filmsController.show);

// esport 
module.exports = router 