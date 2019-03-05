
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('sellers').del()
    .then(function () {
      // Inserts seed entries
      return knex('sellers').insert([
        {stall_number:1 , name:'Aimees AppleBottoms', url:"Aimee_ApplesB.com", market_id:2},
        {stall_number: 2, name:'Raise the Barr', url:"RaisingTheBar.com", market_id:2},
        {stall_number: 3, name:'Seance', url:"Seance.com", market_id:2},
        {stall_number: 4 , name:'CoOp Copulation', url:"CoopCopulation.com", market_id:2},
        {stall_number: 5 , name:'VegOut', url:"vegout.com", market_id:2},
        {stall_number: 1 , name:'Vegetables n things', url:"vegandthings.com", market_id: 1},
        {stall_number: 2 , name:'Baked Breads', url:"bakedbreads.com", market_id:1},
        {stall_number: 3 , name:'Weird Boys', url:"weirdboys.com", market_id:1},
        {stall_number: 4, name:'Simplicity', url:"simplicity.com", market_id:1},
        {stall_number: 5, name:'Rival', url:"rival.com", market_id:1},
        {stall_number: 1, name:'City Gal Farms', url:"citygals.com", market_id:3},
        {stall_number: 2, name:'Lucky Foods', url:"luckyfoods.com", market_id:3},
        {stall_number: 3, name:'Green Machine', url:"greenmachine.com", market_id:3},
        {stall_number: 4, name:'Grannies', url:"grannies.com", market_id:3},
        {stall_number: 5 , name:'Organic Paradise', url:"organicpar.com", market_id:3}
      ]);
    });
};
