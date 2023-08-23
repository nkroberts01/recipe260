import React, { useState } from 'react';
import axios from 'axios';

function RecipeForm() {
  const [recipe, setRecipe] = useState({
    name: '',
    image: '',
    ingredients: '',
    directions: ''
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setRecipe(prevRecipe => ({ ...prevRecipe, [name]: value }));
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      await axios.post('/api/addRecipe', recipe);
      alert('Recipe added successfully!');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Recipe Name:
        <input type="text" name="name" value={recipe.name} onChange={handleChange} />
      </label>
      <label>
        Image URL:
        <input type="text" name="image" value={recipe.image} onChange={handleChange} />
      </label>
      <label>
        Ingredients:
        <textarea name="ingredients" value={recipe.ingredients} onChange={handleChange} />
      </label>
      <label>
        Directions:
        <textarea name="directions" value={recipe.directions} onChange={handleChange} />
      </label>
      <button type="submit">Save</button>
    </form>
  );
}

export default RecipeForm;