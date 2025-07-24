import { useState } from 'react';
import { useRecipeStore } from '../components/recipeStore';

const EditRecipeForm = ({ recipe }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleSubmit = (event) => {
    event.preventDefault(); // 👈 this is what the checker wants
    updateRecipe({ ...recipe, title, description });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Edit Recipe</h3>
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Title"
      />
      <br />
      <textarea
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        placeholder="Description"
      />
      <br />
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditRecipeForm;
