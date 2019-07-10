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


  movies: any;
  results: any[]=[];

  searchTV(query){
    this.auth.search(query).subscribe((data)=>{
      this.movies=data;
      this.results=this.movies['results'];
      console.log(data);
    })
  }
}
