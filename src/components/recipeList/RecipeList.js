import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import RecipeCard from "../recipeCard/RecipeCard";

function RecipeList({ recipes }) {
  return (
    <Container fluid className="recipeList">
      <Row xs="auto">
      {recipes.map((recipe) => (
            <Col key={recipe.id} xs={12} md={6} lg={4} className="cards">
              <RecipeCard key={recipe.id} recipe={recipe} />
              {console.log(recipe)}
            </Col>
          ))}
      </Row>
    </Container>
  );
}

export default RecipeList;
