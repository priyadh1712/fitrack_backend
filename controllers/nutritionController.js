const Nutrition = require('../models/nutritionModel');
const User = require('../models/userModel');

// Add a nutrition intake
const addNutrition = async (req, res) => {
    const { foodItem, calories, protein, carbs, fat, servingSize, mealType, date } = req.body;

    if (!foodItem || !calories || !servingSize || !mealType) {
        return res.status(400).json({ error: 'Food item, calories, serving size, and meal type are required.' });
    }

    try {
        console.log("Before entry");
        const nutritionEntry = new Nutrition({
            foodItem,
            calories,
            protein,
            carbs,
            fat,
            servingSize,
            mealType,
            date,
            userId: req.user.id,
        });

        console.log(req.user);
        await nutritionEntry.save();
        res.status(201).json(nutritionEntry);
        console.log("After Entry");
    } catch (error) {
        console.error("Error saving nutrition:", error);
        res.status(500).json({ error: error.message || 'Failed to log nutrition.' });
    }
};

// Delete a nutrition log by ID
const deleteNutrition = async (req, res) => {
    const { id } = req.params;

    try {
        console.log("Delete request received for ID:", id);

        // Check if ID is valid
        if (!id.match(/^[0-9a-fA-F]{24}$/)) {
            return res.status(400).json({ error: "Invalid ID format." });
        }

        const nutritionEntry = await Nutrition.findById(id);

        if (!nutritionEntry) {
            console.log("Nutrition entry not found.");
            return res.status(404).json({ error: 'Nutrition entry not found.' });
        }

        console.log("Nutrition entry found:", nutritionEntry);

        if (String(nutritionEntry.userId) !== String(req.user.id)) {
            console.log("Unauthorized access attempt by user:", req.user.id);
            return res.status(403).json({ error: 'Unauthorized to delete this entry.' });
        }

        // findByIdAndDelete() method
        await Nutrition.findByIdAndDelete(id);

        console.log("Nutrition entry deleted successfully.");
        res.status(200).json({ message: 'Nutrition entry deleted successfully.' });
    } catch (error) {
        console.error("Error deleting nutrition:", error);
        res.status(500).json({ error: 'Failed to delete nutrition entry.' });
    }
};




// Get all nutrition logs
const getUserNutritionLogs = async (req, res) => {
    try {
        const nutritionLogs = await Nutrition.find({ userId: req.user.id });
        res.status(200).json(nutritionLogs);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch nutrition logs.' });
    }
};

// Set a user's nutrition goal
const setNutritionGoal = async (req, res) => {
    const { dailyCaloriesGoal } = req.body;

    if (!dailyCaloriesGoal) {
        return res.status(400).json({ error: 'Daily calorie goal is required.' });
    }

    try {
        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ error: 'User not found.' });
        }

        user.dailyCaloriesGoal = dailyCaloriesGoal;
        await user.save();

        res.status(200).json({ message: 'Nutrition goal updated successfully.' });
    } catch (error) {
        console.error("Error setting nutrition goal:", error);
        res.status(500).json({ error: 'Failed to set nutrition goal.' });
    }
};

// Get a user's nutrition goal
const getNutritionGoal = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        if (!user || !user.dailyCaloriesGoal) {
            return res.status(404).json({ error: 'Nutrition goal not found.' });
        }

        res.status(200).json({ dailyCaloriesGoal: user.dailyCaloriesGoal });
    } catch (error) {
        console.error("Error fetching nutrition goal:", error);
        res.status(500).json({ error: 'Failed to fetch nutrition goal.' });
    }
};

module.exports = {
    addNutrition,
    getUserNutritionLogs,
    setNutritionGoal,
    deleteNutrition,
    getNutritionGoal,
};
