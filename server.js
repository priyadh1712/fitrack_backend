const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');

// Middleware
const { errorHandler } = require('./middleware/errorHandler');

// Routes
const userRoutes = require('./routes/user');
const exerciseRoutes = require('./routes/exercise');
const nutritionRoutes = require('./routes/nutrition');
const goalRoutes = require('./routes/goal');

const app = express();

dotenv.config();

// Middlewares
app.use(cors()); 
app.use(cookieParser());
app.use(express.json());

//connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to DB");
    app.listen(process.env.PORT, () => {
      console.log("listening on port", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });

// Routes
app.use('/api/users', userRoutes); 
app.use('/api/exercises', exerciseRoutes); 
app.use('/api/nutrition', nutritionRoutes);
app.use('/api/goals', goalRoutes);

