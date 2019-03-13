import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../recipe.model';
import ShoppingListService from 'src/app/shopping-list/shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private shoppingListService: ShoppingListService) { };

  ngOnInit() {
  }

  toShoppingList(ingredients: Ingredient[]) {
    ingredients.forEach(ingredient => {
      this.shoppingListService.addIngredient(ingredient);
    });
  }
}
