function ItemToEdit({ recipeToEdit }) {

    return (
        <div className="recipeItem">
            <img src={"/emojies/" + recipeToEdit.emoji + ".png"} />
            <span>{recipeToEdit.name}</span>
            <p>"{recipeToEdit.category}"</p>
            <ul>
                {recipeToEdit.ingredients.map(ingredient => (
                    <li key={ingredient}>{ingredient}</li>
                ))}
            </ul>
        </div>
    );
}

export default ItemToEdit;