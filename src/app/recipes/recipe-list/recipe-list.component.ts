import { Recipe } from './recipe.model';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('test', 'test desc', 'assets/images/rc2.jpg'),
    new Recipe('test', 'test desc', 'assets/images/rc2.jpg')
  ];

  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelect(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
