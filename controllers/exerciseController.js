const Exercise = require('../models/exerciseModel');

// Get exercises
const getExercises = async (req, res) => {
    try {
        const exercises = await Exercise.find({userId: req.user.id}); // Fetch all exercises for that user
        res.status(200).json(exercises); 
    } catch (error) {
        res.status(400).json({ error: error.message }); // Error Handling done
    }
};

// Create new exercise
const createExercise = async (req, res) => {
    const { type, duration, distance, calories, } = req.body; // Extracting

    try {
        // Create a new entry
        const exercise = new Exercise({ type, duration, distance, calories ,userId: req.user.id,});
        await exercise.save(); 
        res.status(201).json(exercise); 
    } catch (error) {
        res.status(400).json({ error: error.message }); 
    }
};

// Get a exercise by ID
const getExerciseById = async (req, res) => {
    const { id } = req.params; 

    try {
        const exercise = await Exercise.findById(id); 
        if (!exercise) {
            return res.status(404).json({ error: 'Exercise not found' }); 
        }
        res.status(200).json(exercise); 
    } catch (error) {
        res.status(400).json({ error: error.message }); 
    }
};

// Update an exercise
const updateExercise = async (req, res) => {
    const { id } = req.params; 
    const { type, duration, distance, calories } = req.body; 

    try {
        const exercise = await Exercise.findByIdAndUpdate(id, { type, duration, distance, calories }, { new: true }); 
        if (!exercise) {
            return res.status(404).json({ error: 'Exercise not found' }); 
        }
        res.status(200).json(exercise); 
    } catch (error) {
        res.status(400).json({ error: error.message }); 
    }
};

// Delete an exercise
const deleteExercise = async (req, res) => {
    const { id } = req.params; 

    try {
        const exercise = await Exercise.findByIdAndDelete(id); 
        if (!exercise) {
            return res.status(404).json({ error: 'Exercise not found' }); 
        }
        res.status(200).json({ message: 'Exercise deleted successfully' }); 
    } catch (error) {
        res.status(400).json({ error: error.message }); 
    }
};

module.exports = {
    getExercises,
    createExercise,
    getExerciseById,
    updateExercise,
    deleteExercise,
};
