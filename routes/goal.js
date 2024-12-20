const express = require('express');
const router = express.Router();
const { requireAuth } = require('../middleware/requireAuth');
const goalController = require('../controllers/goalController');

// middleware for auth
router.use(requireAuth);

// Routes
router.post('/', goalController.createGoal);

router.get('/', goalController.getGoals);

router.get('/:id', goalController.getGoalById);

router.put('/:id', goalController.updateGoal);

router.delete('/:id', goalController.deleteGoal);

module.exports = router;
