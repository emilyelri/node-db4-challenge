
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, name: 'cup of sugar', quantity: 2},
        {id: 2, name: 'cup butter', quantity: 1.5},
        {id: 3, name: 'cup of flour', quantity: 3},
        {id: 4, name: 'egg', quantity: 3},
        {id: 5, name: 'tsp baking soda', quantity: 1},
        {id: 6, name: 'tsp baking powder', quantity: 1},
        {id: 7, name: 'TBSP vanilla extract', quantity: 1},
        {id: 8, name: 'box of noodles of choice', quantity: 1},
        {id: 9, name: 'can tomato sauce', quantity: 1},
        {id: 10, name: 'tomato, chopped', quantity: 1},
        {id: 11, name: 'lb ground beef', quantity: 0.5},
        {id: 12, name: 'cup of milk', quantity: 1},
        {id: 13, name: 'pinch of salt', quantity: 1},
      ]);
    });
};
