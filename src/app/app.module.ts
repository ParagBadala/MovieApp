import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { SwUrlService } from './services/sw-url.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { SimplefilmComponent } from './component/simplefilm/simplefilm.component';
import { SimpleFilmOperatorComponent } from './component/simple-film-operator/simple-film-operator.component';
import { SimpleFilmAsyncPipeComponent } from './component/simple-film-async-pipe/simple-film-async-pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SimplefilmComponent,
    SimpleFilmOperatorComponent,
    SimpleFilmAsyncPipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    SwUrlService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
