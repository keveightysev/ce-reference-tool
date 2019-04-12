const router = require('express').Router();

const Boards = require('./model.js');

const restricted = require('../auth/restricted.js');

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

router.post('/new', restricted, async (req, res) => {
  if (!req.body.state || !req.body.profession) {
    res
      .status(406)
      .json({ message: 'Please make sure to include a state and profession' });
    return;
  }
  try {
    const newBoard = await Boards.add(req.body);
    res.status(201).json(newBoard);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Server error adding new board' });
  }
});

router.put('/update/:id', restricted, async (req, res) => {
  try {
    const board = await Boards.update(req.params.id, req.body);
    if (board) {
      res.status(200).json(board);
    } else {
      res.status(404).json({ message: 'Board not found' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Server error updating the board' });
  }
});

module.exports = router;
