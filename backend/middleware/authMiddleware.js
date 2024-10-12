const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  // Check if Authorization header exists and starts with 'Bearer '
  const authHeader = req.header('Authorization');
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  // Extract token from header (after 'Bearer ')
  const token = authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    // Verify token using the same 'secretToken' as in auth.js
    const decoded = jwt.verify(token, 'secretToken');
    req.user = decoded.id; // Store the decoded user ID in req.user
    next();
  } catch (error) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};

module.exports = authMiddleware;




