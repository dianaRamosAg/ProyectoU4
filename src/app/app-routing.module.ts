import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import {RecipesDetailComponent  }from "./recipes-detail/recipes-detail.component";


const routes: Routes = [
  {path:"",component:RecipeListComponent},
  {path:"recipe/:id",component:RecipesDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
