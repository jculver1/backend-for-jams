
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('menu').del()
    .then(function () {
      // Inserts seed entries
      return knex('menu').insert([
        //stall one Aimees
        {stall_id: 1, item_id: 1},
        {stall_id: 1, item_id: 24},
        {stall_id: 1, item_id: 20},
        {stall_id: 1, item_id: 19},
        {stall_id: 1, item_id: 4},
        //stall two Raise the Barr
        {stall_id: 2, item_id: 10},
        {stall_id: 2, item_id: 11},
        {stall_id: 2, item_id: 12},
        {stall_id: 2, item_id: 13},
        {stall_id: 2, item_id: 14},
        //stall three Seance 
        {stall_id: 3, item_id: 6},
        {stall_id: 3, item_id: 7},
        {stall_id: 3, item_id: 8},
        {stall_id: 3, item_id: 2},
        {stall_id: 3, item_id: 3},
        //stall four CoOp Copulation
        {stall_id: 4, item_id: 17},
        {stall_id: 4, item_id: 18},
        {stall_id: 4, item_id: 12},
        {stall_id: 4, item_id: 13},
        {stall_id: 4, item_id: 8},
        //stall five Veg Out 
        {stall_id: 5, item_id: 5},
        {stall_id: 5, item_id: 6},
        {stall_id: 5, item_id: 7},
        {stall_id: 5, item_id: 10},
        {stall_id: 5, item_id: 11},
        //stall six Vegetables n' things
        {stall_id: 6, item_id: 1},
        {stall_id: 6, item_id: 7},
        {stall_id: 6, item_id: 8},
        //stall seven Baked Breads
        {stall_id: 7, item_id: 11},
        {stall_id: 7, item_id: 12},
        {stall_id: 7, item_id: 14},
        {stall_id: 7, item_id: 20},
        //stall eight Weird Boys
        {stall_id: 8, item_id: 20},
        {stall_id: 8, item_id: 18},
        {stall_id: 8, item_id: 19},
        {stall_id: 8, item_id: 4},
        //stall nine Simplicity
        {stall_id: 9, item_id: 22},
        {stall_id: 9, item_id: 5},
        {stall_id: 9, item_id: 6},
        //stall ten Rival
        {stall_id: 10, item_id: 23},
        {stall_id: 10, item_id: 5},
        {stall_id: 10, item_id: 6},
        //stall eleven City Gal
        {stall_id: 11, item_id: 1},
        {stall_id: 11, item_id: 4},
        {stall_id: 11, item_id: 7},
        {stall_id: 11, item_id: 6},
        {stall_id: 11, item_id: 5},
        //stall twelve Lucky Foods
        {stall_id: 12, item_id: 9},
        {stall_id: 12, item_id: 13},
        {stall_id: 12, item_id: 18},
        {stall_id: 12, item_id: 15},
        {stall_id: 12, item_id: 21},
        //stall thirteen Green Machine
        {stall_id: 13, item_id: 3},
        {stall_id: 13, item_id: 6},
        {stall_id: 13, item_id: 7},
        {stall_id: 13, item_id: 8},
        {stall_id: 13, item_id: 20},
        //stall fourteen Grannies
        {stall_id: 14, item_id: 21},
        {stall_id: 14, item_id: 15},
        {stall_id: 14, item_id: 19},
        {stall_id: 14, item_id: 22},
        {stall_id: 14, item_id: 24},
        //stall fifteen Organic Paradise
        {stall_id: 15, item_id: 7},
        {stall_id: 15, item_id: 5},
        {stall_id: 15, item_id: 22},
      ]);
    });
};
