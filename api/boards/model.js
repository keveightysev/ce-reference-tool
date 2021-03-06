const db = require('../data/dbConfig.js');

const all = () => {
  return db('boards');
};

const add = async board => {
  const [id] = await db('boards').insert(board);
  return findBoardById(id);
};

const findBoardById = id => {
  return db('boards')
    .where({ id })
    .first();
};

const update = async (id, board) => {
  await db('boards')
    .where({ id })
    .update(board);
  return db('boards')
    .where({ id })
    .first();
};

module.exports = { all, add, findBoardById, update };
