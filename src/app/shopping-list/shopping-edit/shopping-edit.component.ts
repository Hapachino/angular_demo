import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Ingredient } from 'src/app/shared/ingredient.model';
import ShoppingListService from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor(private shoppingListService: ShoppingListService) { };

  ngOnInit() {
  }

  onAddIngredient(name: HTMLInputElement, amount: HTMLInputElement) {
    this.shoppingListService.addIngredient(new Ingredient(name.value, +amount.value));
  }
}
