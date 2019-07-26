import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutorsComponent } from './autors/autors.component';
import { RecipeListComponent } from "./recipe-list/recipe-list.component"
import { RecipesDetailComponent } from "./recipes-detail/recipes-detail.component";

const routes: Routes = [
  {path: 'author', component: AutorsComponent},
  //{path:"",component:RecipeListComponent},
  {path: 'recipe',component:RecipeListComponent},
  {path:'recipe/recipe/:id',component:RecipesDetailComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
