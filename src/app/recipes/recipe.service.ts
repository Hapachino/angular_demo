import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import ShoppingListService from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export default class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'A Test Description',
      'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20),
      ],
    ),
    new Recipe(
      'Another Test Recipe',
      'Another Test Description',
      'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1),
      ],
    )
  ];

  constructor(private shoppingListService: ShoppingListService) {};

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getRecipe(id: number): Recipe {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]): void {
    this.shoppingListService.addIngredients(ingredients);
  }

  updateRecipes() {
    this.recipesChanged.next(this.recipes.slice());
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);

    this.updateRecipes();
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;

    this.updateRecipes();
  }
}
