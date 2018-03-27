import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('Spicy Soup',
      'This is spicy soup with meat in it',
      'https://c1.staticflickr.com/9/8585/28906445485_ce32150295_b.jpg',
      [
        new Ingredient('Meat', 3),
        new Ingredient('Broth', 1),
        new Ingredient('Spices', 3)
      ]),
    new Recipe('Bacon Burger',
      'This is a Bacon Burger with Cheese',
      'https://upload.wikimedia.org/wikipedia/commons/0/07/Lounge_Burger_with_Bacon.jpg',
      [
        new Ingredient('Patty', 1),
        new Ingredient('Bacon', 3),
        new Ingredient('Tomato', 1),
        new Ingredient('Cheese', 1),
        new Ingredient('Bun', 1),
        new Ingredient('onion', 1)
      ])
  ];

  constructor(private slService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

}
