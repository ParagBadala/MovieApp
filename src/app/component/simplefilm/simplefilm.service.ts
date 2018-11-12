import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

import { Movie } from '../../../assets/DataStruct/dataStruct'
import { SwUrlService } from 'src/app/services/sw-url.service';
@Injectable({
  providedIn: 'root'
})
export class SimplefilmService {

  private _baseUrl = 'http://127.0.0.1:3001/';
  private _postUrl = 'rest/api/post-film';
  constructor(private _http: HttpClient, private _swUrlService: SwUrlService ) { }

  getFilms(): Observable<Movie>{
    return this._http.get<Movie>(this._baseUrl+this.url)
  }

  add(movie:Movie): Observable<Movie>{
    return this._http.post<Movie>(this._baseUrl + this._postUrl,movie);
   }

  get url(){
    return this._swUrlService.url
  }

}
