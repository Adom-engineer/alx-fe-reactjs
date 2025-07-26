import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
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
}));
