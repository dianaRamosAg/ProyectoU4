import { Component, OnInit } from '@angular/core';
import { AutorsService } from '../autors.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-autors',
  templateUrl: './autors.component.html',
  styleUrls: ['./autors.component.css']
})
export class AutorsComponent implements OnInit {
  public authors;
  formAuthor;

  constructor(
    private apiauthor: AutorsService, private formBuilder:FormBuilder) {
      this.apiauthor.getAuthors().subscribe(
        (author_result) =>{
          this.authors = author_result;
          console.log(this.authors);
        },
        (err) => {
          console.log(err);
          this.authors = err;
        }
      );

      this.createForm();
    }

    createForm(){
      this.formAuthor = this.formBuilder.group({
        name:['',[Validators.required,Validators.minLength(4)]],
        email:['',[Validators.required,Validators.minLength(4)]]
      });
    }

    guardarAutor(authorToSave) {
      console.log(authorToSave);
      this.apiauthor.addAuthor(authorToSave)
      .subscribe(
        (prod)=> {
          this.apiauthor.getAuthors().subscribe(
            (author_result)=>{
              this.authors = author_result;
              console.log(this.authors);
            },
            (err)=>{
              console.log(err);
              this.authors = err;
            }
          );
          this.createForm();
        },
        (err)=>{
          console.log(err);
        }
      );
    }

  ngOnInit() {
  }

}
