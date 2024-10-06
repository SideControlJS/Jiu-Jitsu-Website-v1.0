const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const authHeader = req.header('Authorization');
  console.log('Auth Header:', authHeader); // This will show whether the token is being sent to the server

  if (!authHeader) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  const token = authHeader.split(' ')[1]; // Extract the token part after 'Bearer'
  console.log('Extracted Token:', token); // Log the token to see if it's correctly extracted

  if (!token) {
    return res.status(401).json({ msg: 'Token is missing, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, 'secretToken'); // Check if the token is valid
    req.user = decoded.id;
    console.log('Token is valid, user ID:', req.user); // Log to confirm token is valid
    next();
  } catch (error) {
    console.log('Token verification failed:', error.message); // Log any token verification error
    res.status(401).json({ msg: 'Token is not valid' });
  }
};

module.exports = authMiddleware;


