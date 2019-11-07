db = require('./dbConfig.js');

function getRecipes() {
    return db('recipes');
}

// function findById(id) {
//     return db('recipes')
//     .where({ id })
//     .first();
// }

function getShoppingList(id) {
    return db('recipes_ingredients as ri')
    .join("ingredients as i", "i.id", "ri.ingredient_id")
    .select("i.name", "i.quantity")
    .where({ recipe_id: id })
}

function getInstructions(id) {
    return db('instructions as i')
    .join("recipes as r", "r.id", "i.recipe_id")
    .select("i.step_number", "i.instruction")
    .where({ recipe_id: id })
}

// function add(scheme) {
//     return db('schemes')
//     .insert(scheme)
//     .then((ids) => findById(ids[0]));
// }

// function update(update, id) {
//     return db('schemes')
//     .where({ id })
//     .update(update)
//     .then((ids) => findById(ids[0]))
// }

// function remove(id) {
//     return db('schemes')
//     .where({ id })
//     .del();
// }


////////
//STRETCH??
////////

// function addStep(step, scheme_id) {

// }

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}