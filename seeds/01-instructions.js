
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {id: 1, recipe_id: 1, step_number: 1, instruction: 'Preheat oven to 375 degrees F. In a small bowl, stir together dry ingredients.'},
        {id: 2, recipe_id: 1, step_number: 2, instruction: 'In a large bowl, mix all the wet ingredients together and slowly add the dry.'},
        {id: 3, recipe_id: 1, step_number: 3, instruction: 'Roll rounded teaspoonfuls into balls and place on ungreased baking sheet.'},
        {id: 4, recipe_id: 1, step_number: 4, instruction: 'Bake 8 to 10 minutes until golden. Let stand on sheet for at least 2 minutes before eating.'},
        {id: 5, recipe_id: 2, step_number: 1, instruction: 'Cook ground beef in pan until brown.'},
        {id: 6, recipe_id: 2, step_number: 2, instruction: 'Add tomato sauce and chopped tomatoes to beef and simmer 10-15 minutes.'},
        {id: 7, recipe_id: 2, step_number: 3, instruction: 'Cook noodles of choice according to box instructions.'},
        {id: 8, recipe_id: 2, step_number: 4, instruction: 'Ready to serve! Add sauce and seasonings of your choice to noodles.'},
        {id: 9, recipe_id: 3, step_number: 1, instruction: 'Preheat oven to 350 degrees F. Sift together dry ingredients.'},
        {id: 10, recipe_id: 3, step_number: 2, instruction: 'Cream together the butter and sugar, beaten egg yolks, & vanilla.'},
        {id: 11, recipe_id: 3, step_number: 3, instruction: 'Alternate adding dry ingredients and milk until incorporated. Add mixture to pan.'},
        {id: 12, recipe_id: 3, step_number: 4, instruction: 'Bake for 25 to 30 minutes, or until springy. Cool before decorating.'},
      ]);
    });
};
