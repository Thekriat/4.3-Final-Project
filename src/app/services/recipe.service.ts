import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private baseURL = "http://localhost:3000/recipe";

  constructor(private http: HttpClient) { }

  addRecipe(recipe: Recipe): Observable<any> {
    return this.http.post(this.baseURL, recipe);
  }

  getAllRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.baseURL);
  }

  getRecipeById(id: string): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.baseURL}/${id}`);
  }

  updateRecipe(id: string, recipe: Recipe): Observable<any> {
    return this.http.patch(`${this.baseURL}/${id}`, recipe);
  }

  deleteRecipe(id: string): Observable<any> {
    return this.http.delete(`${this.baseURL}/${id}`);
  }
}