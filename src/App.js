import React, { useState } from "react";
import { Container } from "react-bootstrap";
import RecipeList from "./components/recipeList/RecipeList";
import NavbarComponent from "./components/navbar/NavBar";
import "./App.css";
import axios from "axios";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchRecipes = async (query) => {

    console.log('query => ', query);

    const apiKey = '5247759374c64d6bb72d1e192d5997c1';
    const apiUrl = 'https://api.spoonacular.com/recipes/search';

    setLoading(true);

    try {
      const response = await axios.get(apiUrl, {
        params: {
          apiKey,
          query,
        },
      });

      const fetchedRecipes = response.data.results;

      setRecipes(fetchedRecipes);

      setLoading(false);

    } catch (error) {
      console.error('Error fetching recipes:', error);
      // setError('Error fetching recipes. Please try again.');

      setLoading(false);
    }
  };

  return (
    <div className="App">
      <NavbarComponent onSearch={searchRecipes} />
      <Container>
        <RecipeList recipes={recipes} />
      </Container>
    </div>
  );
}

export default App;
