import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  results: any[]=[];
  constructor(private auth:AuthService) { }
 
  ngOnInit() {
    this.nowPlaying();
  }
  arrayRange: any[]=[];
  imagesArray: any[]=[];
  nowPlaying(){
    this.auth.nowPlaying().subscribe((data)=>{
      console.log(data);
      this.results=data['results'];
      console.log(this.results);
      for(var i=0;i<this.results.length;i++){
        this.arrayRange.push(i);
        this.imagesArray.push("http://image.tmdb.org/t/p/original" + this.results[i]['poster_path']);
      }
      console.log(this.imagesArray);
      console.log(this.arrayRange);
    })
  }

}
