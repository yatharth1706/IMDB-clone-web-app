import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-display-movies',
  templateUrl: './display-movies.component.html',
  styleUrls: ['./display-movies.component.css']
})
export class DisplayMoviesComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  url:any;
  movies: any;
  searchMovie(query){
    this.url="http://omdbapi.com/?s=" + query + "&apikey=thewdb"
    
    this.http.get(this.url).subscribe((data)=>{
      
      this.movies=data;
      console.log(this.movies['Search']);
    })

  }
}