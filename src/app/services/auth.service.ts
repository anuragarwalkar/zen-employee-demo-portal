import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usernameSource = new BehaviorSubject<string>("Guest");
  currentUser = this.usernameSource.asObservable();


  displayUserName(message: string){
    this.usernameSource.next(message);
  }

  //router authentication

  private loggedInStatus = false;


  setLoggedIn(value: boolean){
    this.loggedInStatus =value;
  }
  
  
  get isLoggedIn(){
    return this.loggedInStatus
  }



  constructor() { }
}
