import React, {useEffect, useState} from "react";

function App() {
  const [mainRecipes, setMainRecipes] = useState([]);
  const [dessertRecipes, setDessertRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('/api/main-recipes')
      .then(response => response.json())
      .then(data => setMainRecipes(data));
    fetch('/api/dessert-recipes')
      .then(response => response.json())
      .then(data => setDessertRecipes(data));
  }, []);

  const filteredMainRecipes = mainRecipes.filter(recipe => 
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredDessertRecipes = dessertRecipes.filter(recipe => 
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Recipe book</h1>
      <input 
      type="text"
      placeholder="Search Recipes" 
      value={searchTerm}
      onChange={ e => setSearchTerm(e.target.value)}
      />
      <h2>Main Recipes</h2>
      <ul>
        {filteredMainRecipes.map(recipe => (
          <li key={recipe.id}>{recipe.name}</li>
        ))}
      </ul>
      <h2>Dessert Recipes</h2>
      <ul>
        {filteredDessertRecipes.map(recipe => (
          <li key={recipe.id}>{recipe.name}</li>
        ))}
      </ul>
    </div>
  )
} 