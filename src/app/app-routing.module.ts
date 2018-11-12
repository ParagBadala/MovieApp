import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { SimplefilmComponent } from './component/simplefilm/simplefilm.component';
import { SimpleFilmOperatorComponent } from './component/simple-film-operator/simple-film-operator.component';
import { SimpleFilmAsyncPipeComponent } from './component/simple-film-async-pipe/simple-film-async-pipe.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'home/simplefilm', component:SimplefilmComponent},
  {path:'home/simple-film-Operator', component:SimpleFilmOperatorComponent},
  {path:'home/simple-film-async-pipe', component:SimpleFilmAsyncPipeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
