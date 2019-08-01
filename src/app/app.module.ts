import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
// import { MoviesListComponent } from './movies-list/movies-list.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DisplayMoviesComponent } from './display-movies/display-movies.component';
import { HttpClientModule } from '@angular/common/http';
import { TopratedComponent } from './toprated/toprated.component';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { TvShowComponent } from './tv-show/tv-show.component';
import { DiscoverComponent } from './discover/discover.component';
import { ViewinfoComponent } from './viewinfo/viewinfo.component';
import { HomeComponent } from './home/home.component';
import {SlideshowModule} from 'ng-simple-slideshow';
import { SafePipe } from './safe.pipe';
var firebaseConfig = {
  apiKey: "AIzaSyCduDm-zjIjfs45uaHovcuAUL2AgrcNWKE",
  authDomain: "movie-a8e04.firebaseapp.com",
  databaseURL: "https://movie-a8e04.firebaseio.com",
  projectId: "movie-a8e04",
  storageBucket: "",
  messagingSenderId: "129333254476",
  appId: "1:129333254476:web:6057e6560b1e2d12"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    DisplayMoviesComponent,
    TopratedComponent,
    TvShowComponent,
    DiscoverComponent,
    ViewinfoComponent,
    HomeComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SlideshowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }
