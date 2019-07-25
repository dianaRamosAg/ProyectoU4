import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private http: HttpClient) {}

  public getRecipe(){
    return this.http.get("http://134.209.202.112/api/v1/products/");
  }

  getRecipeById(id){
    return this.http.get(""+id);
  }

  addRecipe(recipe) {
    return this.http.post("",recipe, httpOptions);
  }

  updateRecipe(recipe){
    return this.http.put("",recipe, httpOptions);
  }

  findByCategory(cat){
    return this.http.get(""+cat);
  }

  findByDate(date){
    return this.http.get(""+date);
  }

  findAuthorR(author){
    return this.http.get(""+author);
  }

}
