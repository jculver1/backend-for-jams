
exports.seed = function(knex, Promise) {
  return knex('markets').del()
    .then(function () {
      return knex('markets').insert([
        {name:'Edge Water', city:'Denver', state:'CO'},
        {name:'City Park Picks', city:'Denver', state:'CO'},
        {name:'Union Station', city:'Denver', state:'CO'}
      ]);
    });
};
