import { Component, OnInit } from '@angular/core';
import {AuthService } from '../auth.service';
import { ActivatedRoute } from '@angular/router';

import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-viewinfo',
  templateUrl: './viewinfo.component.html',
  styleUrls: ['./viewinfo.component.css']
})
export class ViewinfoComponent implements OnInit {
  id:string;
  results: any;
  image: string;
  genres: any[]=[];
  constructor(private auth:AuthService,public activatedRoute: ActivatedRoute ,public sanitizer: DomSanitizer) {
    let Id=this.activatedRoute.snapshot.paramMap.get("id");
    this.id=Id;    
   }
   cast:any[]=[];
   profile: any[]=[];
  ngOnInit() {
    this.auth.showInfo(this.id).subscribe((data)=>{
      console.log(data);
      this.results=data;
      this.image="https://image.tmdb.org/t/p/original/" + this.results['backdrop_path'];  
      this.cast=this.results['credits']['cast'];
      console.log(this.cast);
      for(let i=0;i<5;i++){
        this.profile.push(this.cast[i]);
      }
      console.log(this.profile);
      for(let i=0;i<this.results['genres'].length;i++){
        this.genres.push(this.results['genres'][i]['name']);
      }
      console.log(this.genres);
    })
    
  }
  mov: any;
  key: string;
  vid:boolean=false;
  myurl:string;
  trailer(){
    this.auth.trailer(this.id).subscribe((data)=>{
      console.log(data);
      this.mov=data;
      this.key=this.mov.results[0].key;
      this.myurl="https://www.youtube.com/embed/" + this.key;
    })
    this.vid=true;
  }
  
  changeVid(){
    this.vid=false;
  }
}
