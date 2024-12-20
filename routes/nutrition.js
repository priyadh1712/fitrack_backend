const express = require('express');
const router = express.Router();
const nutritionController = require('../controllers/nutritionController');
const { requireAuth } = require('../middleware/requireAuth');

// Middleware for auth
router.use(requireAuth);

// Routes
router.post('/add', nutritionController.addNutrition);

router.get('/', nutritionController.getUserNutritionLogs);

router.delete('/:id', nutritionController.deleteNutrition);

router.put('/goal', nutritionController.setNutritionGoal);

router.get('/goal', nutritionController.getNutritionGoal);

module.exports = router;
