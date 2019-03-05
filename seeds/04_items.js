
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([
        {name: 'apples'},
        {name: 'oranges'},
        {name: 'bananas'},
        {name: 'kumquats'},
        {name: 'lettuce'},
        {name: 'cucumbers'},
        {name: 'kale'},
        {name: 'eggplant'},
        {name: 'tomatos'},
        {name: 'rye'},
        {name: 'french'},
        {name: 'ciabatta'},
        {name: 'tuscan'},
        {name: 'multigrain'},
        {name: 'cookies'},
        {name: 'chocolate'},
        {name: 'carmel'},
        {name: 'truffles'},
        {name: 'fudge'},
        {name: 'kombucha'},
        {name: 'tea'},
        {name: 'wine'},
        {name: 'craft beer'},
        {name: 'juices'},
      ]);
    });
};
