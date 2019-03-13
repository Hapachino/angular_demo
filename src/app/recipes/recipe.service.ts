import { Recipe } from './recipe.model';

export default class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'A Test Description',
      'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg'
    ),
    new Recipe(
      'Another Test Recipe',
      'Another Test Description',
      'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg'
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
