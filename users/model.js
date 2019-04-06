const db = require('../data/dbConfig.js');

module.exports = {
  add,
  findBy,
};

async function add(user) {
  try {
    const [id] = await db('users').insert(user);
    return findBy({ id: id });
  } catch (err) {
    console.log(err);
    return err;
  }
}

function findBy(filter) {
  return db('users')
    .where(filter)
    .first();
}
