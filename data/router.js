const express = require('express');
const router = express.Router();
const db = require('./recipe-model');

router.get('/', (req, res) => {
    db.getRecipes()
    .then(recipes => {
        res.status(200).json(recipes);
    })
    .catch(err => res.status(500).json({ error: err }));
})

router.get('/:id/ingredients', (req, res) => {
    const id = req.params.id;
    db.getShoppingList(id)
    .then(ingredients => {
        res.status(200).json(ingredients);
    })
    .catch(err => res.status(500).json({ error: err }));
})

router.get('/:id/instructions', (req, res) => {
    const id = req.params.id;
    db.getInstructions(id)
    .then(instructions => {
        res.status(200).json(instructions);
    })
    .catch(err => res.status(500).json({ error: err }));
})

module.exports = router;