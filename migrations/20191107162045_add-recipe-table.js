
exports.up = function(knex) {
  return knex.schema
  
  // table for recipe names
  .createTable('recipes', function (table) {
      table.increments();
      table.string('name', 255).notNullable();

  })

  // table for ingredient names
  .createTable('ingredients', table => {
      table.increments();
      table.string('name', 255).notNullable();
      table.float('quantity').notNullable();
  })

  // table for binding recipe and ingredients
  .createTable('recipe_ingredients', table => {
    table.increments();
    // recipe FK
    table.integer('recipe_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('recipes')
    .onDelete('RESTRICT') 
    .onUpdate('CASCADE')
    // ingredient FK
    table.integer('ingredient_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('ingredients')
    .onDelete('RESTRICT')
    .onUpdate('CASCADE')
  })

  // table for instructions
  .createTable('instructions', table => {
    table.increments();
    table
      .integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE')
    table.integer('step_number').notNullable();
    table.string('instruction', 255).notNullable();
})}

exports.down = function(knex) {
   return knex.schema

   .dropTableIfExists('instructions')
   .dropTableIfExists('recipe_ingredients')
   .dropTableIfExists('ingredients')
   .dropTableIfExists('recipes');
};