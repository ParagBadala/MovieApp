import { Component, OnInit } from '@angular/core';
import { SwUrlService } from 'src/app/services/sw-url.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _swUrlService:SwUrlService) { }

  ngOnInit() {
  }

  toggleUrl(){
    this._swUrlService.toggleUrl()
  }

}
