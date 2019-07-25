import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutorsComponent } from './autors/autors.component';
import { RecipeListComponent } from "./recipe-list/recipe-list.component"


const routes: Routes = [
  {path: 'author', component: AutorsComponent},
  {path:"",component:RecipeListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
