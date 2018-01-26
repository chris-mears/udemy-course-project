import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Rescipe', 'This is simply a test', 'https://c1.staticflickr.com/9/8585/28906445485_ce32150295_b.jpg'),
    new Recipe('A Another Test Rescipe', 'This is simply a test', 'https://c1.staticflickr.com/9/8585/28906445485_ce32150295_b.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
