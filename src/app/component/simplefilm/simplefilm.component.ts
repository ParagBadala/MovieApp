import { Component, OnInit } from '@angular/core';
import { SimplefilmService } from './simplefilm.service';
import { Movie } from 'src/assets/DataStruct/dataStruct';

@Component({
  selector: 'app-simplefilm',
  templateUrl: './simplefilm.component.html',
  styleUrls: ['./simplefilm.component.css'],
  providers: [SimplefilmService]
})
export class SimplefilmComponent implements OnInit {
  errMsg:string;
  films:Movie;

  constructor(private _filmService: SimplefilmService) { }

  ngOnInit() {
    this.getData()
  }

  getData(){
    this._filmService.getFilms().subscribe(
      (data)=>(this.films=data),
      err=> this.errMsg = err.message 
    );
  }

  add(){
    console.log("Add Method Of ts");
    const movie = {"title":"A new Observer!"} as Movie
    this._filmService.add(movie).subscribe();
    this.getData();
  }

}
