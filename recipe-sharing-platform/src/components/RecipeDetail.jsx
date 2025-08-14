import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import recipesData from '../data.json';

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = recipesData.find((r) => r.id.toString() === id);
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return <div className="p-8 text-center text-gray-500">Recipe not found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Link to="/" className="text-blue-500 hover:underline">&larr; Back to Home</Link>
      
      <h1 className="text-3xl font-bold mt-4 mb-2">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="w-full rounded-lg shadow mb-6" />

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc list-inside space-y-1">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="text-gray-700">{ingredient}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
        <ol className="list-decimal list-inside space-y-2">
          {recipe.instructions.map((step, index) => (
            <li key={index} className="text-gray-700">{step}</li>
          ))}
        </ol>
      </section>
    </div>
  );
}
