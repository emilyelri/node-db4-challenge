
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        {id: 1, recipe_id: 1, ingredient_id: 1},
        {id: 2, recipe_id: 1, ingredient_id: 2},
        {id: 3, recipe_id: 1, ingredient_id: 3},
        {id: 4, recipe_id: 1, ingredient_id: 4},
        {id: 5, recipe_id: 1, ingredient_id: 5},
        {id: 6, recipe_id: 1, ingredient_id: 6},
        {id: 7, recipe_id: 1, ingredient_id: 7},
        {id: 8, recipe_id: 2, ingredient_id: 8},
        {id: 9, recipe_id: 2, ingredient_id: 9},
        {id: 10, recipe_id: 2, ingredient_id: 10},
        {id: 11, recipe_id: 2, ingredient_id: 11},
        {id: 12, recipe_id: 3, ingredient_id: 2},
        {id: 13, recipe_id: 3, ingredient_id: 1},
        {id: 14, recipe_id: 3, ingredient_id: 4},
        {id: 15, recipe_id: 3, ingredient_id: 12},
        {id: 16, recipe_id: 3, ingredient_id: 7},
        {id: 17, recipe_id: 3, ingredient_id: 3},
        {id: 18, recipe_id: 3, ingredient_id: 6},
        {id: 19, recipe_id: 3, ingredient_id: 13},
      ]);
    });
};
