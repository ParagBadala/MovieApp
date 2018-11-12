import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SwUrlService {

  private _url = 'rest/api/get-films';
  private _urlGood = true;

  get url(){
    return this._url;
  }

  toggleUrl(){
    this._urlGood = !this._urlGood;
    this._url = this._urlGood ? 'rest/api/films' : 'rest/api/not-the-api-url';
    console.log(this._url);
  //  return this._url;
  }
}
