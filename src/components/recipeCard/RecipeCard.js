import React from "react";
import { Card, Button } from "react-bootstrap";


function RecipeCard({ recipe }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={`https://spoonacular.com/recipeImages/${recipe.image}`} alt={recipe.title} />
      <Card.Body>
        <Card.Title>{recipe.title}</Card.Title>
        <Card.Text>
          <p>Calories: {recipe.calories}</p>
          <p>Servings: {recipe.servings}</p>
          <p>Ready In: {recipe.readyInMinutes}</p>
          <p>Servings: {recipe.servings}</p>
        </Card.Text>
        <a target="_blank" href={recipe.sourceUrl}><Button variant="dark">view recipe</Button></a>
        
      </Card.Body>
    </Card>
  );
}

export default RecipeCard;
