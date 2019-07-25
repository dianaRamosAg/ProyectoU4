import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutorsComponent } from './autors/autors.component'


const routes: Routes = [
  {path: '', component: AutorsComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
