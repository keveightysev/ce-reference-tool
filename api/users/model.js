const db = require('../data/dbConfig.js');

module.exports = {
  add,
  findBy,
  update,
};

async function add(user) {
  const [id] = await db('users').insert(user);
  return findBy({ id });
}

async function update(id, user) {
  await db('users')
    .where({ id })
    .update(user);
  return db('users')
    .where({ id })
    .first();
}

function findBy(filter) {
  return db('users')
    .where(filter)
    .first();
}
