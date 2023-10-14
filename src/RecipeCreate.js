import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function RecipeCreate({ onCreateRecipe }) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  const initialFormState = {
    name: "",
    cuisine: "",
    url: "",
    ingredients:"",
    preparation: "",
  }
  
  const [formData, setFormData] = useState({...initialFormState});
  
const handleChange = ({target}) => {
  const value = target.value;
  setFormData({
    ...formData,
    [target.name]:value,
  });
};
  
 const handleSubmit = (event) => {
    event.preventDefault();
   const newRecipe = {...formData};
    onCreateRecipe(newRecipe);
    setFormData({...initialFormState});
  };


  
  return (
    <form onSubmit = {handleSubmit} name="create">
      <table>
        <tbody>
          <tr className>
            <td>
              <label htmlFor="name"></label>
             <input
               id="name"
               type="text"
               name="name"
               onChange={handleChange}
               value={formData.name}
               placeholder="Name"
               className = "form-control"
               />       
            </td>
            <td>
              <label forHtml="cuisine"></label>
                <input
                  id="cuisine"
                  type="text"
                  name="cuisine"
                  onChange={handleChange}
                  value={formData.cuisine}
                  placeholder= "Cuisine"
                  className = "form-control"
                  />
            </td>
            <td>
              <label forHtml="photo">
                <input
                  id="photo"
                  type="text"
                  name="photo"
                  onChange={handleChange}
                  value={formData.photo}
                  placeholder="URL"
                  className = "form-control"
                  />
              </label>
            </td>
            <td>
              <label forHtml="ingredients"></label>
                <textarea
                  id="ingredients"
                  type="text"
                  name="ingredients"
                  onChange={handleChange}
                  value={formData.ingredients}
                  placeholder="Ingredients"
                  rows={2}
                  cols={30}
                  className = "form-control"
                
                  />
            </td>
            
            <td>
              <label forHtml="preparation"></label>
                <textarea
                  id="preparation"
                  name="preparation"
                  onChange={handleChange}
                  value={formData.preparation}
                  placeholder="Preparation"
                  rows={2}
                  cols={30}
                  className = "form-control"
                  />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;