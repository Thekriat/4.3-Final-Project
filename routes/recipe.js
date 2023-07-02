let express = require('express');
let router = require('express').Router();
var Recipe = require('../models/Recipe');

router.get('/', function(req, res) {
    res.json({
        status: 'API Works',
        message: 'Welcome to recipe app API'
    });
});

 
// GET all recipes
router.get('/', async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.json(recipes);
    } catch (err) {
        res.json({ message: err });
    }
});

// GET a specific recipe
router.get('/:id', async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id);
        res.json(recipe);
    } catch (err) {
        res.json({ message: err });
    }
});

// ADD a new recipe
router.post('/', async (req, res) => {
    const recipe = new Recipe({
        category: req.body.category,
        name: req.body.name,
        ingredients: req.body.ingredients,
        directions: req.body.directions,
        nutritionFacts: req.body.nutritionFacts
    });

    try {
        const savedRecipe = await recipe.save();
        res.json(savedRecipe);
    } catch (err) {
        res.json({ message: err });
    }
});

// DELETE a recipe
router.delete('/:id', async (req, res) => {
    try {
        const removedRecipe = await Recipe.deleteOne({ _id: req.params.id });
        res.json(removedRecipe);
    } catch (err) {
        res.json({ message: err });
    }
});

// UPDATE a recipe
router.patch('/:id', async (req, res) => {
    try {
        const updatedRecipe = await Recipe.updateOne(
            { _id: req.params.id },
            {
                $set: {
                    category: req.body.category,
                    name: req.body.name,
                    ingredients: req.body.ingredients,
                    directions: req.body.directions,
                    nutritionFacts: req.body.nutritionFacts
                }
            }
        );
        res.json(updatedRecipe);
    } catch (err) {
        res.json({ message: err });
    }
});
router.get('/desserts', async (req, res) => {
      try {
          const desserts = await Recipe.find({ category: 'desserts' });
          res.json(desserts);
      } catch (err) {
          res.json({ message: err });
      }
  });
  
  router.get('/mainDishes', async (req, res) => {
      try {
          const mainDishes = await Recipe.find({ category: 'mainDishes' });
          res.json(mainDishes);
      } catch (err) {
          res.json({ message: err });
      }
  });
  
  router.get('/sideDishes', async (req, res) => {
      try {
          const sideDishes = await Recipe.find({ category: 'sideDishes' });
          res.json(sideDishes);
      } catch (err) {
          res.json({ message: err });
      }
  });
  

module.exports = router;