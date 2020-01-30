import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BckenService } from './bcken.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  reactiveForm1: FormGroup;

  registration  = {} ;
  

  constructor(private router: Router ,private ben : BckenService) { }

  ngOnInit()  {
    this.reactiveForm1 =new FormGroup({
      'username' : new FormControl(null,Validators.required),
       'email' : new FormControl(null,[Validators.required,Validators.email]),
       'password' : new FormControl(null,Validators.required)
      
      }); 
        }


        onCalling(){
          this.registration =this.reactiveForm1.value ;
          console.log(this.registration);
          this.router.navigate(['features']) ;
          ////////////////////////////////////////////////////
          this.ben.registerUser(this.registration)
          .subscribe(
            res => console.log(res),
            err => console.log(err)
          )
     }
     
        }

      

