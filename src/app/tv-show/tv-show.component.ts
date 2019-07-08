import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-tv-show',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.css']
})
export class TvShowComponent implements OnInit {

  constructor(private http:HttpClient, public auth: AuthService) { }

  ngOnInit() {
  }

  url:any;
  movies: any;
  posters: any[]=[];
  results:any[]=[];
  searchTV(){
    this.url="https://api.themoviedb.org/3/trending/all/day?api_key=" + this.auth.apikey + "&language=en-US&external_source=imdb_id";
    // this.url="http://omdbapi.com/?s=" + query + "&apikey=thewdb"
    
    this.http.get(this.url).subscribe((data)=>{
      this.posters=[];
      this.movies=data;
      this.results=this.movies['results']
      console.log(this.results);
      for(let source in this.movies['results']){
        this.posters.push(this.movies['results'][source]['poster_path']);
      }
      
      // console.log(this.posters);
    })

  }
}
