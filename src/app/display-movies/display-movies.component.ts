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

  url:any;
  movies: any;
  posters: any[]=[];
  
  searchMovie(query){
    this.url="https://api.themoviedb.org/3/search/movie?query=" + query +"&api_key=" + this.auth.apikey + "&language=en-US&external_source=imdb_id";
    // this.url="http://omdbapi.com/?s=" + query + "&apikey=thewdb"
    
    this.http.get(this.url).subscribe((data)=>{
      this.posters=[];
      this.movies=data;
      console.log(this.movies);
      // console.log(this.movies['results'][0]['poster_path']);
      for(let source in this.movies['results']){
        this.posters.push(this.movies['results'][source]['poster_path']);
      }
      
      // console.log(this.posters);
    })

  }
}