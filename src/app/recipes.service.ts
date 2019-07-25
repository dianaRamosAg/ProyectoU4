import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
    return this.http.get("http://134.209.200.112/api/v1/recipe/");
  }

  getRecipeById(id){
    return this.http.get("http://134.209.200.112/api/v1/recipe/id/id/?id="+id);
  }

  addRecipe(recipe) {
    return this.http.post("http://134.209.200.112/api/v1/recipe/",recipe, httpOptions);
  }

  updateRecipe(recipe){
    return this.http.put("http://134.209.200.112/api/v1/recipe/",recipe, httpOptions);
  }

  findByCategory(cat){
    return this.http.get("http://134.209.200.112/api/v1/recipe/cat/?cat="+cat);
  }

  findByDate(date){
    return this.http.get("http://134.209.200.112/api/v1/recipe/date/date/?date="+date);
  }

  findAuthorR(author){
    return this.http.get("http://134.209.200.112/api/v1/recipe/"+author);
  }

}
