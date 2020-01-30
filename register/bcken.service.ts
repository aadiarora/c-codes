import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BckenService {

  
  private backendregurl = 'http://192.168.43.124:3000/register/' ;  // backend api url for registration
  private backendlogurl = 'http://192.168.43.124:3000/login/' ; //  backend apiurl for login page 
  constructor(private http : HttpClient) { }


  registerUser(user) {
    return this.http.post<any>(this.backendregurl , user)
  }

  loginUser(user) {
    return this.http.get<any>(this.backendlogurl , user)
  }


}
