const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Users = require('./model.js');

const restricted = require('../auth/restricted.js');
const checkRole = require('../auth/checkRole.js');

const generateToken = require('../auth/generateToken.js');

router.post('/adduser', restricted, checkRole('admin'), async (req, res) => {
  if (
    !req.body.first_name ||
    !req.body.last_name ||
    !req.body.email ||
    !req.body.username ||
    !req.body.password
  ) {
    res
      .status(406)
      .json({ message: 'Full name, email, username, and password required' });
    return;
  }
  try {
    let user = req.body;
    user.password = bcrypt.hashSync(user.password, 10);
    const newUser = await Users.add(user);
    res.status(201).json(newUser);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Server error creating new user' });
  }
});

router.post('/login', async (req, res) => {
  let { username, password } = req.body;
  try {
    const user = await Users.findBy({ username }).first();
    if (user && bcrypt.compareSync(password, user.password)) {
      const token = generateToken(user);
      res.status(200).json({ message: `Welcome ${user.first_name}!`, token });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Server error logging in' });
  }
});

router.put('/update', restricted, checkRole('admin'), async (req, res) => {
  try {
    const userInfo = await Users.findBy({ username: req.body.username });
    const user = await Users.update(userInfo.id, req.body);
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Server error updating user' });
  }
});

module.exports = router;
