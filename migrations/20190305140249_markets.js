
exports.up = function(knex, Promise) {
    return knex.schema.createTable('markets', table => {
        table.increments('id').unsigned().primary();
        table.string('name').notNullable().defaultsTo('');
        table.string('city').notNullable().defaultsTo('');
        table.string('state').notNullable().defaultsTo('');
      })
};

exports.down = function(knex, Promise) {
  
};
