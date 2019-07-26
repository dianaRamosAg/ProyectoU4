// import { Component, OnInit } from '@angular/core';
// import { RecipesService} from "../recipes.service";
// import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-recipe-list',
//   templateUrl: './recipe-list.component.html',
//   styleUrls: ['./recipe-list.component.css']
// })
// export class RecipeListComponent implements OnInit {

//   public recipe;
//   formRecipe;

//   constructor(private apirecipe:RecipesService,
//               private formBuilder:FormBuilder) { 
//    this.apirecipe.getRecipe().subscribe(
//        (recipe_result)=>{
//          this.recipe = recipe_result;
//          console.log(this.recipe);
//        },
//        (err)=>{
//          console.log(err);
//          this.recipe = err;
//        }
//      );
//   }

//   createForm(){
//     this.formRecipe = this.formBuilder.group({
//       name:['',[Validators.required]],
//       ingredients:['',[Validators.required]],
//       process:['',[Validators.required]],
//       name_cat:['',[Validators.required]],
//       image:['',[Validators.required]],
//       date_creation:['',[Validators.required]],
//       cost_aprox:[0,[Validators.required]],
//       source:['',[Validators.required]],
//       comments:['',[Validators.required]],
//       score:['',[Validators.required]],
//       author:['',[Validators.required]]
//     });
//   }

//   ngOnInit() {
//   }

//   guardarRecipe(recipeToSave) {
//     console.log(recipeToSave);
//     this.apirecipe.addRecipe(recipeToSave)
//     .subscribe(
//       (recipe)=> {
//         this.apirecipe.getRecipe().subscribe(
//           (recipe_result)=>{
//             this.recipe = recipe_result;
//             console.log(this.recipe);
//           },
//           (err)=>{
//             console.log(err);
//             this.recipe = err;
//           }
//         );
//         this.createForm();
//       },
//       (err)=>{
//         console.log(err);
//       }
//     );
//   }
// }

import { Component, OnInit } from '@angular/core';
import { RecipesService } from "../recipes.service";
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  public recipes;
  formRecipe;

  constructor(private apirecipe: RecipesService,
    private formBuilder: FormBuilder) {
    this.apirecipe.getRecipe().subscribe(
      (recipes_result) => {
        this.recipes = recipes_result;
        console.log(this.recipes);
      },
      (err) => {
        console.log(err);
        this.recipes = err;
      }
    );
    this.createForm();
  }

  createForm() {
    this.formRecipe = this.formBuilder.group({
      name: ['', [Validators.required]],
      ingredients: ['', [Validators.required]],
      process: ['', [Validators.required]],
      name_cat: ['', [Validators.required]],
      image: ['', [Validators.required]],
      cost_approx: [0, [Validators.required]],
      source: ['', [Validators.required]],
      comments: ['', [Validators.required]],
      score: ['', [Validators.required]],
      author: ['', [Validators.required]]
    });
  }

  ngOnInit() {
  }

  guardarRecipe(recipeToSave) {
    console.log(recipeToSave);
    this.apirecipe.addRecipe(recipeToSave)
      .subscribe(
        (recipes) => {
          this.apirecipe.getRecipe().subscribe(
            (recipe_result) => {
              this.recipes = recipe_result;
              console.log(this.recipes);
            },
            (err) => {
              console.log(err);
              this.recipes = err;
            }
          );
          this.createForm();
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
