import { useEffect, useRef, useState } from 'react';


function RecipeForm({ recipes, setRecipes, isEditingRecipe, setIsEditingRecipe, recipeToEdit }) {

  const [recipeName, setRecipeName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [recipeIngredients, setRecipeIngredients] = useState("");

  useEffect(() => {
    if (recipeToEdit) {
      setRecipeName(recipeToEdit.name);
      setSelectedCategory(recipeToEdit.category);
      setRecipeIngredients(recipeToEdit.ingredients.join(", "));
    }
  }, [recipeToEdit]);


  const showAlert = (message) => {
    setTimeout(() => {
      alert(message);
    }, 100);
  }
  const handelSubmit = () => {
    setRecipes([...recipes, {
      name: recipeName,
      emoji: 'emoji' + Math.floor(Math.random() * 10),
      category: selectedCategory,
      ingredients: recipeIngredients.split(",").map(s => s.trim()).filter(Boolean)
    }]);

    setRecipeName("");
    setSelectedCategory("");
    setRecipeIngredients("");

    showAlert("✅ Recipe added successfully!");

  }

  const editRecipe = () => {
    if (recipeName == "") {
      showAlert("Please fill in recipe name !");
    } else
      if (selectedCategory == "") {
        showAlert("Please select a recipe category !");
      } else
        if (recipeIngredients == "") {
          showAlert("Please fill in recipe ingredients !");
        } else {
          console.log(recipeIngredients);
          setRecipes(recipes.map(recipe => recipe.name === recipeToEdit.name ? {
            name: recipeName,
            emoji: 'emoji' + Math.floor(Math.random() * 10),
            category: selectedCategory,
            ingredients: recipeIngredients.split(",").map(s => s.trim()).filter(Boolean)
          } : recipe));
          setRecipeName("");
          setSelectedCategory("");
          setRecipeIngredients("");
          setIsEditingRecipe(false);
          showAlert("✅ Recipe edited successfully!");
        }

  }

  const cancelEdit = () => {
    setRecipeName("");
    setSelectedCategory("");
    setRecipeIngredients("");
    setIsEditingRecipe(false)
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <>
      <form action={!isEditingRecipe ? handelSubmit : editRecipe} className="RecipeForm">
        {!isEditingRecipe && <h3>Add New Recipe</h3>}
        {isEditingRecipe && <h3>Edit Recipe</h3>}
        <div className="input-field">
          <label htmlFor="name"> Recipe name : </label>
          <input type="text" id="name" placeholder="Enter Name" value={recipeName}
            onChange={(e) => setRecipeName(e.target.value)} required />
        </div>
        <div className="input-field">
          <label htmlFor="category"> Recipe category : </label>
          <select id="category" value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)} required>
            <option className="placeholder" value="">Select your option...</option>
            {recipeCategories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
        <div className="input-field">
          <label htmlFor="ingredients"> Ingredients : </label>
          <p>"separate ingredients with commas"</p>
          <textarea id="ingredients" rows="4" cols="33" placeholder="eg : onion, olive, salt, garlic..." value={recipeIngredients}
            onChange={(e) => setRecipeIngredients(e.target.value)} required />
        </div>
        {!isEditingRecipe && <input id="submit" type="submit" value={!isEditingRecipe ? 'Add Recipe' : 'Edit Recipe'} />}
      </form>
      {isEditingRecipe && <div>
        <button onClick={editRecipe} className="editButton">Edit Recipe</button>
        <button onClick={cancelEdit} className="editButton">Cancel</button>
      </div>}
    </>
  );
}

export default RecipeForm;

const recipeCategories = [
  "Appetizers",
  "Main Dishes",
  "Side Dishes",
  "Desserts",
  "Breakfast",
  "Snacks",
  "Salads",
  "Soups & Stews",
  "Beverages",
  "Breads & Pastries",
  "Vegan",
  "Vegetarian",
  "Gluten-Free",
  "Low-Carb",
  "Quick & Easy",
  "Grilled",
  "Slow Cooker",
  "Holiday Specials",
  "Kids-Friendly",
  "World Cuisine"
];
