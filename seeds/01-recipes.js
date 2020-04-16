
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, name: 'sugar cookies'},
        {id: 2, name: 'spaghetti'},
        {id: 3, name: 'yellow cake'}
      ]);
    });
};
