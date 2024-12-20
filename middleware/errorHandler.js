// Error handling middleware
const errorHandler = (err, req, res, next) => {
  // Logging all the errors
  console.error(err.stack);

  if (err.name === 'ValidationError') {
    return res.status(400).json({ error: err.message });
  }

  if (err.name === 'CastError') {
    return res.status(400).json({ error: 'Invalid data format' });
  }

  if (err.status === 401) {
    return res.status(401).json({ error: 'Unauthorized access' });
  }

  return res.status(500).json({ error: 'An unexpected error occurred' });
};

module.exports = { errorHandler };
