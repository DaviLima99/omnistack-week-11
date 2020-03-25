
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table) {
    
        table.increments().primary();

        table.string('name').notNullable();
        table.string('cpf').notNullable();
        table.string('description').notNullable();
        table.string('contact');
        
        table.integer('service_station_id').unsigned().notNullable();
        
        table.timestamps();

        table.foreign('service_station_id').references('id').inTable('service_station');
    })
};
      
exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
};
      
