const jwt = require('jsonwebtoken');

// This checks request has a valid JWT token
const requireAuth = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ error: 'Authentication required' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
    if (err) {
      return res.status(401).json({ error: 'Authentication failed' });
    }

    req.user = decodedToken; 
    next(); 
  });
};

module.exports = { requireAuth };
