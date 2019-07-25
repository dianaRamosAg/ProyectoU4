import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutorsComponent } from './autors/autors.component';
import { RecipeListComponent } from "./recipe-list/recipe-list.component"
import { RecipesDetailComponent } from "./recipes-detail/recipes-detail.component";


const routes: Routes = [
<<<<<<< HEAD
  {path: 'author', component: AutorsComponent},
  {path:"",component:RecipeListComponent}
=======
  //{path: '', component: AutorsComponent},
  {path: '', component: RecipeListComponent},
  {path:'recipe/:id',component:RecipesDetailComponent}
>>>>>>> d458138e75f5b934d71f6191af68b7361e120733
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
