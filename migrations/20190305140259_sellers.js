
exports.up = function(knex, Promise) {
    return knex.schema.createTable('sellers', table => {
        table.increments('id').unsigned().primary();
        table.integer('stall_number')
        table.string('name').notNullable().defaultsTo('');
        table.string('url', 500).notNullable().defaultsTo('');
        table.integer('market_id')
      })
};

exports.down = function(knex, Promise) {
  
};
