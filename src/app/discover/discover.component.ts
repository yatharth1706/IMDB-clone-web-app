import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'
@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css']
})
export class DiscoverComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.discover(this.year,this.genres,this.sortt).subscribe((data)=>{
      console.log(data);
      this.results=data['results'];
    })
  }

  year: number=2019;
  sortt: string="popularity.desc";
  genres: string="28"
  results: any[]=[];

  fn(){
    console.log(this.year);
    console.log(this.sortt);
    console.log(this.genres);
    this.auth.discover(this.year,this.genres,this.sortt).subscribe((data)=>{
      console.log(data);
      this.results=data['results'];
    })
  }
}
