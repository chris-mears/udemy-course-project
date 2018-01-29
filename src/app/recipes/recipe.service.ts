import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from "./recipe.model";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('A Test Rescipe', 'This is simply a test', 'https://c1.staticflickr.com/9/8585/28906445485_ce32150295_b.jpg'),
    new Recipe('A Another Test Rescipe', 'This is simply a test', 'https://c1.staticflickr.com/9/8585/28906445485_ce32150295_b.jpg')
  ];

  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  }

}
