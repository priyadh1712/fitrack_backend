const Goal = require('../models/goalModel'); 
const { validationResult } = require('express-validator'); 


const createGoal = async (req, res) => {
    const { goalType, targetValue, currentValue, startDate, endDate, description } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const newGoal = new Goal({
            userId: req.user.id,
            goalType,
            targetValue,
            currentValue,
            startDate,
            endDate,
            description,
        });

        const goal = await newGoal.save();
        res.status(201).json(goal);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

// Get all goals for a particular user
const getGoals = async (req, res) => {
    try {
        const goals = await Goal.find({ userId: req.user.id });
        if (!goals || goals.length === 0) {
            return res.status(404).json({ message: 'No goals found' });
        }
        res.status(200).json(goals);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

// Get a specific goal by ID
const getGoalById = async (req, res) => {
    const { id } = req.params;

    try {
        // Finding 
        const goal = await Goal.findById(id);
        if (!goal) {
            return res.status(404).json({ message: 'Goal not found' });
        }
        res.status(200).json(goal);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

// Update a goal
const updateGoal = async (req, res) => {
    const { id } = req.params;
    const { goalType, targetValue, currentValue, startDate, endDate, description } = req.body;

    try {
        // Find and update the goal by ID
        const goal = await Goal.findByIdAndUpdate(
            id,
            { goalType, targetValue, currentValue, startDate, endDate, description },
            { new: true }
        );
        if (!goal) {
            return res.status(404).json({ message: 'Goal not found' });
        }
        res.status(200).json(goal);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

// Delete a goal
const deleteGoal = async (req, res) => {
    const { id } = req.params;

    try {
        // Find and delete the goal by ID
        const goal = await Goal.findByIdAndDelete(id);
        if (!goal) {
            return res.status(404).json({ message: 'Goal not found' });
        }
        res.status(200).json({ message: 'Goal deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = {
    createGoal,
    getGoals,
    getGoalById,
    updateGoal,
    deleteGoal,
};
