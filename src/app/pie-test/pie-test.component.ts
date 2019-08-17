import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-pie-test',
  templateUrl: './pie-test.component.html',
  styleUrls: ['./pie-test.component.css']
})
export class PieTestComponent implements OnInit {
  percent: any;
  options: any;
  constructor() { 
    this.percent = 80;
    this.options = {
      size: 50,
      rotate: 0
    };
  }

  ngOnInit() {
    // $(function() {
    //   $('.chart').easyPieChart({
          
    //   });
    // });
  }

  
}
