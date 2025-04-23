import RecipeItem from "./RecipeItem"
import ItemToEdit from "./ItemToEdit"

function RecipeList({ recipes, setRecipes, isEditingRecipe,
  recipeToEdit, setRecipeToEdit, setIsEditingRecipe }) {
  return (
    <>
      {!isEditingRecipe &&
        <div className="RecipeList">
          <h3>Recipe List</h3>
          <div className="recipeItems">
            {recipes.length > 0 ? recipes.map((recipe, index) => (
              <RecipeItem key={index} recipe={recipe} recipes={recipes}
                setRecipes={setRecipes} isEditingRecipe={isEditingRecipe}
                setRecipeToEdit={setRecipeToEdit} setIsEditingRecipe={setIsEditingRecipe} />
            )) : <p>no recipe found, you must add a recipe to show something !</p>}
          </div>
        </div>
      }
      {isEditingRecipe &&
        <div className="recipeItems">
          <ItemToEdit recipeToEdit={recipeToEdit} />
        </div>
      }
    </>
  );
}


export default RecipeList;