import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import {AuthService} from '../auth.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})



export class SignupComponent implements OnInit {
  myForm: FormGroup;

  constructor(public fb: FormBuilder, public auth: AuthService) {
    this.myForm=this.fb.group({
      firstName: ['',[Validators.required]],
      lastName: ['',[Validators.required]],
      email: ['',[Validators.required]],
      password: ['',[Validators.required,Validators.minLength(8)]],
      confirmPassword: ['',[Validators.required]]
    })
   }

  ngOnInit() {
    this.latest('trending/all/day');
  }

  onSubmit(myForm){
    console.log(myForm);
  }
  movies: any;
  results: any[]=[];
  imageSources: any[]=[];
  latest(query){
    this.auth.search(query).subscribe((data)=>{
      this.movies=data;
      this.results=this.movies['results'];
      console.log(this.results);
      for(let i=0;i<this.results.length;i++){
        this.imageSources.push('http://image.tmdb.org/t/p/w342/' + this.results[i]['poster_path'])
      }
      console.log(this.imageSources);
    })
  }

}
