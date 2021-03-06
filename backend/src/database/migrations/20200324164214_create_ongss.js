exports.up = function(knex) {
  return knex.schema.createTable('ongs', function(table) {

      table.increments().primary();
      table.string('name').notNullable();
      table.string('email');
      table.string('wpp');
      table.string('city');
      table.string('uf', 2);

      table.timestamps();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
};
