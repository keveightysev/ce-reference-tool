const jwt = require('jsonwebtoken');

const generateToken = user => {
  const payload = {
    subject: user.id,
    username: user.username,
  };

  const options = {
    expiresIn: '30d',
  };

  return jwt.sign(payload, process.env.JWT_SECRET, options);
};

module.exports = generateToken;
