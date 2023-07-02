import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-update-recipe',
  templateUrl: './update-recipe.component.html',
  styleUrls: ['./update-recipe.component.css']
})

export class UpdateRecipeComponent implements OnInit {
  recipe: Recipe = {
    name: '',
    ingredients: [],
    directions: [],
    nutritionFacts: [],
  };

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') as string;
    this.getRecipeById(id);
  }

  getRecipeById(id: string): void {
    this.recipeService.getRecipeById(id).subscribe(
      res => {
        this.recipe = res;
      },
      err => {
        console.log(err);
      }
    );
  }

  updateRecipe(): void {
    const id = this.route.snapshot.paramMap.get('id') as string;
    this.recipeService.updateRecipe(id, this.recipe).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }
}