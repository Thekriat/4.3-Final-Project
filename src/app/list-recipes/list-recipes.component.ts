import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-list-recipe',
  templateUrl: './list-recipes.component.html',
  styleUrls: ['./list-recipes.component.css']
})
export class ListRecipesComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.getAllRecipes().subscribe((data: Recipe[]) => {
      this.recipes = data;
    });
  }

  deleteRecipe(id: string | undefined) {
    if (id) { // Make sure id is not undefined
      this.recipeService.deleteRecipe(id).subscribe(() => {
        // remove the recipe from the recipes array or refetch the recipes
      });
    }
  }

  editRecipe(id: string | undefined) {
    if (id) { // Make sure id is not undefined
      // logic to redirect the user to the edit recipe page with the given id
    }
  }
}