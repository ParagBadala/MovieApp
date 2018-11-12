import { Component, OnInit } from '@angular/core';
import { SimpleFilmAsyncPipeService } from './simple-film-async-pipe.service';
import { Observable } from 'rxjs';
import { Movie } from 'src/assets/DataStruct/dataStruct';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-simple-film-async-pipe',
  templateUrl: './simple-film-async-pipe.component.html',
  styleUrls: ['./simple-film-async-pipe.component.css'],
  providers: [SimpleFilmAsyncPipeService]
})
export class SimpleFilmAsyncPipeComponent implements OnInit {

  errMsg:string;
  films$:Observable<Movie[]>
  constructor(private _simpleFilmAsyncPipeService: SimpleFilmAsyncPipeService) { }

  ngOnInit() {
    this.getFilms();
  }

  getFilms(){
    this.films$ = this._simpleFilmAsyncPipeService.getFilm()
      .pipe(
        catchError(err=>{
          this.errMsg=err;
          return [];
        })
      );
  }

  add(){
    const movie = { title: 'A New Observer!' } as Movie;
    this._simpleFilmAsyncPipeService.addFilm(movie).subscribe(
      () => this.getFilms(),
      err => this.errMsg = err
    );
  }
}
  
