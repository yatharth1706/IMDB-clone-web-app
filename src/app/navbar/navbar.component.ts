import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  url:any;

  searchMovie(query){
    this.url="http://omdbapi.com/?s=" + query + "&apikey=thewdb"
    
    this.http.get(this.url).subscribe((data)=>{
      console.log(data);
    })

  }
}
