import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferService {
  email23: string

  constructor() { }

  login123()
  {
    console.log("hey")
  }
  update(abc){
    this.email23  = abc
    //console.log(this.email23)
  }

  loggedIn = new BehaviorSubject(false)


}
