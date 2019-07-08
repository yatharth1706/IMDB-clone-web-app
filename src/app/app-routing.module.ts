import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DisplayMoviesComponent } from './display-movies/display-movies.component';
import { TvShowComponent } from './tv-show/tv-show.component';

const routes: Routes = [
  {path: 'login' ,component: LoginComponent},
  {path: 'signup' , component: SignupComponent},
  {path: 'movies', component: DisplayMoviesComponent},
  {path: 'tvshows' ,component: TvShowComponent},
  {path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
