import { Component, OnInit } from '@angular/core';
import { RecipesService} from "../recipes.service"

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  public recipe;

  constructor(private apirecipe:RecipesService) { 
    this.apirecipe.getRecipe().subscribe(
      (recipe_result)=>{
        this.recipe = recipe_result;
        console.log(this.recipe);
      },
      (err)=>{
        console.log(err);
        this.recipe = err;
      }
    );
  }
  

  ngOnInit() {
  }

}
