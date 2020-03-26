
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table) {
    
        table.increments().primary();

        table.string('name').notNullable();
        table.string('description').notNullable();
        table.float('value');
        
        table.integer('ong_id').unsigned().notNullable();
        
        table.timestamps();

        table.foreign('ong_id').references('id').inTable('ongs');
    })
};
      
exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
};
      
