import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-display-movies',
  templateUrl: './display-movies.component.html',
  styleUrls: ['./display-movies.component.css']
})

export class DisplayMoviesComponent implements OnInit {

  constructor(private http: HttpClient,public auth: AuthService) { }

  ngOnInit() {
  }
  
  movies: any;
  results: any[]=[];

  searchMovie(query){
    
    this.auth.searchMovie(query).subscribe((data)=>{
      this.movies=data;
      this.results=this.movies['results'];
    })

  }
}