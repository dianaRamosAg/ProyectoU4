import { Component, OnInit } from '@angular/core';
import { AutorsService } from '../autors.service';

@Component({
  selector: 'app-autors',
  templateUrl: './autors.component.html',
  styleUrls: ['./autors.component.css']
})
export class AutorsComponent implements OnInit {
  public authors;

  constructor(
    private apiauthor: AutorsService) {
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
    }

  ngOnInit() {
  }

}
