const mongoose = require('mongoose');

// Schema for storing goals
const goalSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User', 
            required: true,
        },
        goalType: {
            type: String,
            enum: [
                'daily steps', 
                'weekly workout sessions', 
                'calorie intake', 
                'hydration', 
                'sleep duration', 
                'weight management', 
                'other'
            ], 
            required: true,
        },
        targetValue: {
            type: Number,
            required: true, 
        },
        currentValue: {
            type: Number,
            default: 0, 
        },
        startDate: {
            type: Date,
            required: true,
        },
        endDate: {
            type: Date,
            required: true,
        },
        description: {
            type: String,
            default: '', 
        },
    },
    { timestamps: true } 
);

// Created model
module.exports = mongoose.model('Goal', goalSchema);
