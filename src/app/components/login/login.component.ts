import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  errorMessage:string;
  email:string;
  password:string;
  checkCredentials:boolean = false;

  constructor(private authService:AuthService, private router:Router){

  }

  ngOnInit(): void {
    this.authService.getAuth().subscribe(auth =>{
      if(auth){
        this.router.navigate(['/zenhome'])
      }
    })
    
  }

  onSubmit(){

    this.authService.login(this.email, this.password).then(()=>{
    this.router.navigate(['/zenhome'])
    
    }).catch(error =>{
      
      this.checkCredentials = true
      if(error.message === 'The email address is badly formatted.' ){
        this.errorMessage = 'Email id is not valid.'
      }else if (error.message === 'There is no user record corresponding to this identifier. The user may have been deleted.'){
        this.errorMessage = 'Please sign up.'
      } else if(error.message === 'The password is invalid or the user does not have a password.'){
        this.errorMessage ='Invalid username or password.'
      }
    })

  }

}
