import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';

import { Ingredient } from 'src/app/shared/ingredient.model';
import ShoppingListService from '../shopping-list.service';
import { Subscription } from 'rxjs/Subscription';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') form: NgForm;

  subscription: Subscription;
  editMode: boolean = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { };

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.shoppingListService.getIngredient(index);
          this.form.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount,
          })
        }
      );
  }

  onSubmit(value) {
    const newIngredient = new Ingredient(value.name, value.amount);
    const { editMode, shoppingListService, editedItemIndex } = this;

    if (editMode) {
      shoppingListService.editIngredient(editedItemIndex, newIngredient);
    } else {
      shoppingListService.addIngredient(newIngredient);
    }

    this.onClear();
  }

  onClear() {
    this.form.reset();

    this.editMode = false;
  }

  onDelete(index: number) {
    this.shoppingListService.deleteIngredient(this.editedItemIndex);

    this.onClear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
