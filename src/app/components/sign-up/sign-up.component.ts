import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
 
  constructor(private authService:AuthService, private router:Router){

  }

  createUser({value, valid}){
    this.authService.signUp(value.email, value.cnfPassword).then(()=>{
      this.router.navigate(['/zenhome']).catch(err=>{
        console.log(err)
      })
    })
  }
}
