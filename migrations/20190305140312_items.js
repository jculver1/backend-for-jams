
exports.up = function(knex, Promise) {
    return knex.schema.createTable('items', table => {
        table.increments('item_id').unsigned().primary();
        table.string('name')
      })
};

exports.down = function(knex, Promise) {
  
};
