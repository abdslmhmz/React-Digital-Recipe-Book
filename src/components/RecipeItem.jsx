function RecipeItem({ recipe, recipes, setRecipes,
     isEditingRecipe, setRecipeToEdit, setIsEditingRecipe }) {

    const removeRecipe = (recipeToRemove) => {
        const confirmDelete = window.confirm("Are you sure you want to delete the '" + recipe.name + "' recipe ?");
        if (confirmDelete) {
            setRecipes(recipes.filter((recipe) => recipe.name !== recipeToRemove));
        }
    };
    const editRecipe = (targetRecipe) => {
        setRecipeToEdit(recipes.find(recipe => recipe.name === targetRecipe));
        setIsEditingRecipe(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="recipeItem">
            <img src={"/emojies/" + recipe.emoji + ".png"} />
            <span>{recipe.name}</span>
            <p>"{recipe.category}"</p>
            <ul>
                {recipe.ingredients.map(ingredient => (
                    <li key={ingredient}>{ingredient}</li>
                ))}
            </ul>
            {!isEditingRecipe &&
                <>
                    <p onClick={() => removeRecipe(recipe.name)} id="delete">Delete recipe</p>
                    <p onClick={() => editRecipe(recipe.name)} id="edit">Edit recipe</p>
                </>
            }

        </div>
    );
}

export default RecipeItem;