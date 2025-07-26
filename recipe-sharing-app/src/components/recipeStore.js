import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  favorites: [],
  recommendations: [],

  addRecipe: (newRecipe) =>
    set((state) => {
      const updated = [...state.recipes, newRecipe];
      return {
        recipes: updated,
        filteredRecipes: get().applyFilter(updated, state.searchTerm),
      };
    }),

  updateRecipe: (updatedRecipe) =>
    set((state) => {
      const updated = state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      );
      return {
        recipes: updated,
        filteredRecipes: get().applyFilter(updated, state.searchTerm),
      };
    }),

  deleteRecipe: (id) =>
    set((state) => {
      const updated = state.recipes.filter((recipe) => recipe.id !== id);
      return {
        recipes: updated,
        filteredRecipes: get().applyFilter(updated, state.searchTerm),
        favorites: state.favorites.filter((favId) => favId !== id),
      };
    }),

  setSearchTerm: (term) =>
    set((state) => ({
      searchTerm: term,
      filteredRecipes: get().applyFilter(state.recipes, term),
    })),

  setRecipes: (recipes) =>
    set((state) => ({
      recipes,
      filteredRecipes: get().applyFilter(recipes, state.searchTerm),
    })),

  applyFilter: (recipes, term) => {
    const search = term.toLowerCase();
    return recipes.filter(
      (recipe) =>
        recipe.title.toLowerCase().includes(search) ||
        recipe.description.toLowerCase().includes(search)
    );
  },

  // Favorites
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...new Set([...state.favorites, recipeId])],
    })),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // Recommendations based on favorites
  generateRecommendations: () =>
    set((state) => {
      const favoriteRecipes = state.recipes.filter((r) =>
        state.favorites.includes(r.id)
      );
      const keywords = favoriteRecipes.flatMap((r) =>
        r.title.toLowerCase().split(' ')
      );

      const recommended = state.recipes.filter(
        (r) =>
          !state.favorites.includes(r.id) &&
          keywords.some((word) =>
            r.title.toLowerCase().includes(word)
          )
      );

      return { recommendations: recommended.slice(0, 5) }; // Limit to 5
    }),
}));
