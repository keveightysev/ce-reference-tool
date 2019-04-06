const router = require('express').Router();

const Boards = require('./model.js');

router.get('/', async (req, res) => {
  try {
    const boards = await Boards.all();
    res.status(200).json(boards);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ message: 'Server error retrieving board information' });
  }
});

module.exports = router;
