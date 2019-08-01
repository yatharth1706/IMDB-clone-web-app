import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DisplayMoviesComponent } from './display-movies/display-movies.component';
import { TvShowComponent } from './tv-show/tv-show.component';
import { DiscoverComponent } from './discover/discover.component';
import { ViewinfoComponent } from './viewinfo/viewinfo.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: 'login' ,component: LoginComponent},
  {path: 'signup' , redirectTo: ""},
  {path: 'movies', component: DisplayMoviesComponent},
  {path: 'tvshows' ,component: TvShowComponent},
  {path: 'discover', component: DiscoverComponent},
  {path: 'discover/:view/:id', component: ViewinfoComponent},
  {path: 'movies/:view/:id', component: ViewinfoComponent},
  {path: '**', redirectTo: ""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
