import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/assets/DataStruct/dataStruct';
import { SimpleFilmOperatorService } from './simple-film-operator.service';

@Component({
  selector: 'app-simple-film-operator',
  templateUrl: './simple-film-operator.component.html',
  styleUrls: ['./simple-film-operator.component.css'],
  providers: [SimpleFilmOperatorService]
})
export class SimpleFilmOperatorComponent implements OnInit {

  private errMsg:string;
  private films:Movie;

  constructor(private _simpleFilmOperatorService: SimpleFilmOperatorService) { }

  ngOnInit() {
    this.getFilms()
  }

  private getFilms(){
    this._simpleFilmOperatorService.getFilm().subscribe(
      (data)=> {
        this.films=data
      },
      (err)=> {
        this.errMsg = err
      }
    )
  }

  private add(){
    const movie = {"title":"A New Observable"} as Movie
    this._simpleFilmOperatorService.addFilm(movie).subscribe(
      ()=>this.getFilms(),
      err=>this.errMsg=err
    );
  }

}
