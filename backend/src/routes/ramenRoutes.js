// File: backend/src/routes/ramenRoutes.js
const express = require('express');
const router = express.Router();
const ramenController = require('../controllers/ramenController');

router.route('/')
  .get(ramenController.getRamens)
  .post(ramenController.createRamen);

router.route('/:id')
  .get(ramenController.getRamenById)
  .put(ramenController.updateRamen)
  .delete(ramenController.deleteRamen);

module.exports = router;
