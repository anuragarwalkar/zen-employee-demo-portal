import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {HttpClient} from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  //Local array to store credentials
  credentialsArray:any =[];

  //shows error msg
  httpError:boolean = false;
  
  //Boolean for check is logged in and show error msg
  isLoggedIn:boolean = false;

  //Check user has input valid credentials and display error msg
  checkCredentials: boolean =false;

  //String for two way data binding  
  user:string;
  password:string;


  constructor(private router: Router,
    private http: HttpClient, private auth: AuthService) { }

    
    logInUser(){

      console.log(this.user, this.password)
      
      for (let i in this.credentialsArray) {
        // console.log(this.credentialsArray[i].email, this.password === this.credentialsArray[i].password )
        if (this.user === this.credentialsArray[i].email && this.password === this.credentialsArray[i].password)
        {
          this.auth.displayUserName(this.credentialsArray[i].name)
          this.auth.setLoggedIn(true);
          this.router.navigate(['Zen-home'])

         // console.log(this.userName)
        }else{
          this.checkCredentials= true
          
        }
      }
       
     }
    

  ngOnInit() {
    this.http.get("../assets/loginDB.json")
    .subscribe((response)=>{

      // console.log(response)
      this.credentialsArray = response;
     // console.log(this.credentialsArray)
    }
    // ,()=>{
    //   this.httpError =true
    // }
    
    )

    //this.auth.currentUser.subscribe(message=> this.message = message)

  }

}
