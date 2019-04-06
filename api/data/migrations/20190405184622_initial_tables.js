exports.up = function(knex) {
  return knex.schema
    .createTable('boards', table => {
      table.increments();
      table.string('country');
      table.string('state', 2);
      table.string('profession').notNullable();
      table.string('accepted_credits');
      table.string('url');
      table.string('credits');
      table.string('hs_credits');
      table.string('reporting_period');
    })

    .createTable('users', table => {
      table.increments();
      table.string('first_name').notNullable();
      table.string('last_name').notNullable();
      table.string('email').notNullable();
      table.string('username').notNullable();
      table.string('password').notNullable();
    })

    .createTable('updates', table => {
      table.increments();
      table
        .integer('board_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('boards')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      table
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('boards')
    .dropTableIfExists('users')
    .dropTableIfExists('updates');
};
