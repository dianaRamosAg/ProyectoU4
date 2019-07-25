import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class AutorsService {

  constructor(private http: HttpClient) { }

  public getAuthors(){
    return this.http.get("http:/134.209.200.112/api/v1/author");
  }

  getAuthorById(id){
    return this.http.get("http:/134.209.200.112/api/v1/author/"+id);
  }

  addAuthor(author){
    return this.http.post("http:/134.209.200.112/api/v1/author",author, httpOptions);
  }

}
