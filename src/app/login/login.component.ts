import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;

  constructor(public fb: FormBuilder) {
    this.myForm=this.fb.group({
      email: ['',[Validators.required]],
      password: ['',[Validators.required]]
    })
   }

  ngOnInit() {
  }

  onSubmit(myForm){
    console.log(myForm);
  }
}
