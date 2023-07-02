import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {
  recipe: Recipe = {
    id: '',
    name: '',
    ingredients: [],
    directions: [],
    nutritionFacts: []
  };

  constructor(private recipeService: RecipeService) { }

  ngOnInit() { }

  addRecipe() {
    this.recipeService.addRecipe(this.recipe).subscribe(data => {
      // logic to handle the response from the server
    });
  }
}