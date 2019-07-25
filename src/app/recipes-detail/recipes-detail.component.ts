import { Component, OnInit } from '@angular/core';
import { RecipesService } from "../recipes.service";
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {

  recipe;

  constructor(private apirecipe: RecipesService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(
      (params)=>{
        this.apirecipe.getRecipeById(params.get('id')).subscribe(
          (recipe_result) => {
            this.recipe = recipe_result;
            console.log(this.recipe);
          },
          (err) => {
            this.recipe = err;
            console.log(err);
          }
        );
      },
      ()=>{}
    );
  }


  ngOnInit() {
  }

}
