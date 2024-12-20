const mongoose = require('mongoose');

// Schema for storing exercises
const exerciseSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ['Running',
      'Cycling',
      'Bicep Curls',
      'Squats',
      'Deadlifts',
      'Push-ups',
      'Pull-ups',
      'Lunges',
      'Bench Press',
      'Leg Press'], 
      required: true
    },
    duration: {
      type: Number,
      required: true
    },
    distance: {
      type: Number, 
      required: true
    },
    calories: {
      type: Number, 
      required: true
    },
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  },
  { timestamps: true } // Timestamp for storing
);

// Creating the model
const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;
