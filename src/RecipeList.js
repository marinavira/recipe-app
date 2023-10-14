import React from "react";
import RecipeCreate from "./RecipeCreate";
import RecipeData from "./RecipeData";

function RecipeList({ recipes, deleteRecipe }) {
  const handleDelete = (index) => {
    // Call the deleteRecipe function with the index of the recipe to be deleted
    deleteRecipe(index);
  };

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe, index) => (
            <tr key={index} className = {index % 2 === 0 ? "row-yellow" : "row-white"}>
              <td>{recipe.name}</td>
              <td>{recipe.cuisine}</td>
              <td>
                <img
                  src={recipe.photo}
                  alt={`${recipe.name} photo`}
                  style={{ width: "55px", height: "px" }}
                />
              </td>
              <td className= "scroll-textarea">{recipe.ingredients}</td>
              <td className = "scroll-textarea">{recipe.preparation}</td>
              <td>
                <button onClick={() => handleDelete(index)} name="delete">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;