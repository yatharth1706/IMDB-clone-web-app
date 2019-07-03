import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

i: any = 0;
txt: string = 'Lorem ipsum typing effect!'; /* The text */
speed: any = 50; /* The speed/duration of the effect in milliseconds */

typeWriter() {
  if (this.i < this.txt.length) {
    document.getElementById("typewriter").innerHTML += this.txt.charAt(this.i);
    this.i++;
    setTimeout(this.typeWriter, this.speed);
  }
}
  
onclik(){
  this.typeWriter();
}
}
