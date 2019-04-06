const db = require('../data/dbConfig.js');

module.exports = { all };

function all() {
  return db('boards');
}
