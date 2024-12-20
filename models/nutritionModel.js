const mongoose = require('mongoose');

// Schema for storing Nutritions
const nutritionSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',  
            required: true,
        },
        foodItem: {
            type: String,
            required: true, 
        },
        calories: {
            type: Number,
            required: true, 
        },
        protein: {
            type: Number,
            default: 0, 
        },
        carbs: {
            type: Number,
            default: 0, 
        },
        fats: {
            type: Number,
            default: 0,
        },
        servingSize: {
            type: String,
            required: true, 
        },
        mealType: {
            type: String,
            enum: ['breakfast', 'lunch', 'dinner', 'snack'], 
            required: true,
        },
        date: {
            type: Date,
            required: true,
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },        
    },
    { timestamps: true } 
);

// Created Model
module.exports = mongoose.model('Nutrition', nutritionSchema);
