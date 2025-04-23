# 🧾 Build a Digital Recipe Book

## 📋 Specifications

### 1. Core Features

- ✅ A form where users can add a new recipe:
  - Recipe name (text)  
  - Ingredients (text or comma-separated string)
- ✅ A list of added recipes is shown below the form.
- ✅ Allow editing or deleting a recipe.
- ✅ Each recipe should display:
  - The name  
  - A list of ingredients

### 2. Component Requirements

Use at least 3 components:

1. `<App />` - Main container, holds recipe list state.  
2. `<RecipeForm />` - Form for adding new recipes.  
3. `<RecipeList />` - Displays all recipes using a list of `<RecipeItem />` components.

### 3. State Management

- Use `useState` to manage:
  - An array of recipes (each with name and ingredients)
  - Input values in the form

### 4. User Interactions

- ✅ When the user submits the form, the new recipe should be added to the list.
- ✅ Input fields should be cleared after submission.
- ✅ Optionally, show an alert using `useEffect` when a recipe is added.

## 🎨 Styling Suggestions

- Card-style layout for each recipe
- Emoji or icons for fun
- Separate input fields or just one big textarea for ingredients

## 🌟 Bonus Features (Optional)

- Add categories (e.g. `"dessert"`, `"main dish"`) with dropdown selection
- Filter by category or search by recipe name
