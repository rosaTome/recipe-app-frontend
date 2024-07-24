import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function RecipePage() {
    const { id, type } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        fetch(`/api/${type}-recipes/${id}`)
        .then(response => response.json())
        .then(data => setRecipe(data));
    }, [id, type]);

    if (!recipe) return <div>Loading...</div>;

    return (
        <div>
            <h1>{recipe.name}</h1>
            <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
            <p><strong>Preparation:</strong> {recipe.preparation}</p>
            <p><strong>Cooking:</strong> {recipe.cooking}</p>
        </div>
    );
}

export default RecipePage;