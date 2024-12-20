const express = require('express');
const router = express.Router();
const exerciseController = require('../controllers/exerciseController');
const { requireAuth } = require('../middleware/requireAuth');

// middleware for auth
router.use(requireAuth);

// Routes 
router.get('/', exerciseController.getExercises);            // Get all exercises
router.post('/', exerciseController.createExercise);         // Create a new exercise
router.get('/:id', exerciseController.getExerciseById);      // Get exercise by ID
router.put('/:id', exerciseController.updateExercise);       // Update exercise
router.delete('/:id', exerciseController.deleteExercise);    // Delete exercise

module.exports = router;
