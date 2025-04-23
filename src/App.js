import { useState } from 'react';

import RecipeList from './components/RecipeList';
import RecipeForm from './components/RecipeForm';
import './App.css'

function App() {

  const [recipes, setRecipes] = useState(sampleRecipes); 

  const [isEditingRecipe, setIsEditingRecipe] = useState(false);

  const [recipeToEdit, setRecipeToEdit] = useState();

  return (
    <div className="App">
      <h1>Digital Recipe Book</h1>
      <RecipeForm recipes={recipes} setRecipes={setRecipes}
       isEditingRecipe={isEditingRecipe} setIsEditingRecipe={setIsEditingRecipe}
        recipeToEdit={recipeToEdit} />
      <RecipeList recipes={recipes} setRecipes={setRecipes}
       isEditingRecipe={isEditingRecipe} recipeToEdit={recipeToEdit}
        setRecipeToEdit={setRecipeToEdit} setIsEditingRecipe={setIsEditingRecipe}
         />
    </div>
  );
}

export default App;

const sampleRecipes = [
  {
    name: "Spaghetti Bolognese",
    emoji: "emoji1",
    category: "Main Dishes",
    ingredients: [
      "spaghetti",
      "ground beef",
      "onion",
      "garlic cloves",
      "tomato sauce",
      "olive oil",
      "salt",
      "black pepper"
    ]
  },
  {
    name: "Chocolate Chip Cookies",
    emoji: "emoji2",
    category: "Desserts",
    ingredients: [
      "flour",
      "butter",
      "sugar",
      "brown sugar",
      "eggs",
      "vanilla extract",
      "baking soda",
      "salt",
      "chocolate chips"
    ]
  },
  {
    name: "Greek Salad",
    emoji: "emoji3",
    category: "Salads",
    ingredients: [
      "cucumber",
      "tomatoes",
      "red onion",
      "feta cheese",
      "black olives",
      "olive oil",
      "oregano",
      "salt"
    ]
  }
];


/*

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


const measuringUnits = {
  volume: [
    "teaspoon",
    "tablespoon",
    "cup",
    "milliliter",
    "liter"
  ],
  weight: [
    "gram",
    "kilogram",
    "ounce",
    "pound"
  ],
  other: [
    "piece",
    "slice",
    "clove",
    "pinch",
    "can",
    "package",
    "bunch",
    "stick"
  ]
};

const sampleRecipes = [
  {
    title: "Spaghetti Bolognese",
    category: "Main Dishes",
    ingredients: [
      { name: "spaghetti", quantity: 200, unit: "g" },
      { name: "ground beef", quantity: 300, unit: "g" },
      { name: "onion", quantity: 1, unit: "pc" },
      { name: "garlic cloves", quantity: 2, unit: "clove" },
      { name: "tomato sauce", quantity: 400, unit: "ml" },
      { name: "olive oil", quantity: 2, unit: "tbsp" },
      { name: "salt", quantity: 1, unit: "tsp" },
      { name: "black pepper", quantity: 0.5, unit: "tsp" }
    ],
    instructions: "Cook spaghetti. In a pan, sauté onions and garlic in olive oil, add beef and cook until browned. Add tomato sauce, season, and simmer. Serve over spaghetti.",
    prepTime: "10 mins",
    cookTime: "30 mins",
    servings: 2
  },
  {
    title: "Chocolate Chip Cookies",
    category: "Desserts",
    ingredients: [
      { name: "flour", quantity: 2.5, unit: "cup" },
      { name: "butter", quantity: 1, unit: "cup" },
      { name: "sugar", quantity: 1, unit: "cup" },
      { name: "brown sugar", quantity: 1, unit: "cup" },
      { name: "eggs", quantity: 2, unit: "pc" },
      { name: "vanilla extract", quantity: 1, unit: "tsp" },
      { name: "baking soda", quantity: 1, unit: "tsp" },
      { name: "salt", quantity: 0.5, unit: "tsp" },
      { name: "chocolate chips", quantity: 2, unit: "cup" }
    ],
    instructions: "Preheat oven to 180°C. Cream butter and sugars, add eggs and vanilla. Mix in dry ingredients. Fold in chocolate chips. Scoop dough and bake for 10-12 minutes.",
    prepTime: "15 mins",
    cookTime: "12 mins",
    servings: 24
  },
  {
    title: "Greek Salad",
    category: "Salads",
    ingredients: [
      { name: "cucumber", quantity: 1, unit: "pc" },
      { name: "tomatoes", quantity: 3, unit: "pc" },
      { name: "red onion", quantity: 1, unit: "pc" },
      { name: "feta cheese", quantity: 150, unit: "g" },
      { name: "black olives", quantity: 100, unit: "g" },
      { name: "olive oil", quantity: 3, unit: "tbsp" },
      { name: "oregano", quantity: 1, unit: "tsp" },
      { name: "salt", quantity: 0.5, unit: "tsp" }
    ],
    instructions: "Chop vegetables and mix in a bowl. Add olives and crumbled feta. Drizzle with olive oil and sprinkle with oregano and salt. Toss and serve.",
    prepTime: "10 mins",
    cookTime: "0 mins",
    servings: 4
  }
];

*/
