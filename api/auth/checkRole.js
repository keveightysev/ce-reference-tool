module.exports = checkRole = role => {
  return (req, res, next) => {
    if (req.decoded && req.decoded.role && req.decoded.role === role) {
      next();
    } else {
      res.status(401).json({ message: 'Unauthorized' });
    }
  };
};
