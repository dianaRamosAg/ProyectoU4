import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutorsComponent } from './autors/autors.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipesDetailComponent } from './recipes-detail/recipes-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AutorsComponent,
    RecipeListComponent,
    RecipesDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
