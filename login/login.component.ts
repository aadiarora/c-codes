import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TransferService } from './transfer.service';
import { Router } from '@angular/router';
import { BckenService } from '../register/bcken.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  


  resolved(captchaResponse: string){
    console.log('Resolved captcha with response ${captchaResponse}');
    console.log(captchaResponse)
  }

  


  email1 :string ='' ;
  backdata = {} ;
 // a:any =''
  myReactiveForm: FormGroup
  constructor(private service : TransferService , private router: Router , private bcklog : BckenService ) { }


  

  ngOnInit() {
    this.myReactiveForm =new FormGroup({
      'username' : new FormControl(null,Validators.required),
       'email' : new FormControl(null,[Validators.required,Validators.email]),
       'password' : new FormControl(null,Validators.required),
       're-captcha' : new FormControl(null,Validators.required)
      }); 

      // this.myReactiveForm.valueChanges.subscribe(
      // (value) => console.log(value)
      // )
      // THIS WAS USED TO PRINT ANYTHING WE TYPED OR USED INSIDE FORM

      // this.myReactiveForm.statusChanges.subscribe(
      //   (status)=>console.log(status)
      // ) 
    }

    

    onCalling(){
      this.email1 = this.myReactiveForm.value.email
      console.log(this.myReactiveForm)
      this.backdata =  this.myReactiveForm.value ;
      //this.myReactiveForm.reset();
     // this.a = this.myReactiveForm.status;
      //console.log(this.email1);
     // this.service.login123();                               // this is just a trail function for testing the service
      this.service.update(this.email1)                    // yeh use krke service me ek update function bnake jo user login email dalra ha vo pass ki
      localStorage.setItem('key',this.email1)
      this.service.loggedIn.next(true) 
      this.router.navigate(['features'])
///////////////////////////////////////////////////////////
      this.bcklog.loginUser(this.backdata)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      ) ;


     }
 
     

}
