import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Movie } from 'src/assets/DataStruct/dataStruct';
import { SwUrlService } from 'src/app/services/sw-url.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SimpleFilmAsyncPipeService {

  private _baseUrl = 'http://127.0.0.1:3001/';
  private _postUrl = 'rest/api/post-film';

  constructor(private _http: HttpClient, private swUrlService: SwUrlService) { }

  getFilm(): Observable<Movie[]>{
    return this._http.get<Movie[]>(this._baseUrl + this.url)
      .pipe(
        catchError((err)=>{
          const message = 'Sorry, we can\'t get movies right now; please try again later'
          return throwError(message); 
        })
    );
  }

  addFilm(movie:Movie): Observable<Movie>{
    return this._http.post<Movie>(this._baseUrl + this._postUrl,movie)
      .pipe(
        catchError((err)=>{
          const message = 'Sorry, we can\'t add movies right now; please try again later'
          return throwError(message); 
        })
      );
  }

  get url(){
    return this.swUrlService.url;
  }
}
