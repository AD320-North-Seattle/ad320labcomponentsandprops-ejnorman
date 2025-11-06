function Recipe(props) {
    return (
        <div>
            <h2>{props.recipe.name}</h2>
            <ul>
                <li>
                    <h3>Ingredients</h3>
                    <ul>
                        {props.recipe.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                </li>
                <li>
                    <h3>Instructions</h3>
                    <ol>
                        {props.recipe.instructions.map((instruction, index) => (
                            <li key={index}>{instruction}</li>
                        ))}
                    </ol>
                </li>
            </ul>
        </div>
    );
}

export default Recipe;