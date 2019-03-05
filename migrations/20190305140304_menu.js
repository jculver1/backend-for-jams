
exports.up = function(knex, Promise) {
    return knex.schema.createTable('menu', table => {
        table.integer('stall_id')
        table.integer('item_id')
      })
};

exports.down = function(knex, Promise) {
  
};
