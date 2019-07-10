import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-toprated',
  templateUrl: './toprated.component.html',
  styleUrls: ['./toprated.component.css']
})
export class TopratedComponent implements OnInit {

  constructor(private http: HttpClient, public auth:AuthService) { }

  ngOnInit() {
  }
  url: any;
  baseurl: string="https://api.themoviedb.org/3";
  movies
  onSearch(){
    this.url="https://api.themoviedb.org/3/search/movie?query=spiderman&api_key=" + this.auth.apikey + "&language=en-US&external_source=imdb_id";
    this.http.get(this.url).subscribe((data)=>{
      console.log(data);

    })
  }

}
