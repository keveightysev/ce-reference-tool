const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Users = require('./model.js');

router.post('/register', async (req, res) => {
  if (!req.body.first_name || !req.body.last_name) {
    res.status(406).json({ message: 'Full name required' });
    return;
  } else if (!req.body.email) {
    res.status(406).json({ message: 'Email required' });
    return;
  } else if (!req.body.username) {
    res.status(406).json({ message: 'Username required' });
    return;
  } else if (!req.body.password) {
    res.status(406).json({ message: 'Password required' });
    return;
  }
  try {
    let user = req.body;
    user.password = bcrypt.hashSync(user.password, 10);
    const newUser = await Users.add(user);
    res.status(201).json(newUser[0]);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Server error creating new user' });
  }
});

module.exports = router;
