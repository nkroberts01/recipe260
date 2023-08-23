const { connect } = require('../database'); // Import your database connection function

async function addRecipe(req, res) {
  const db = await connect();
  const recipesCollection = db.collection('recipes');

  const newRecipe = {
    name: req.body.name,
    image: req.body.image,
    ingredients: req.body.ingredients,
    directions: req.body.directions
  };

  try {
    await recipesCollection.insertOne(newRecipe);
    res.status(201).json({ message: 'Recipe added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}

module.exports = {
  addRecipe
};
