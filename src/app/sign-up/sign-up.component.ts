import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
 //array to storing the JSON response
 chcekDB:any =[];
  
  // To POST data on the JSON server
 newCredentials :object ={};
  
  //Boolean to show or hide account creation msg
 accountStatus : boolean = false;
  
  //to show email id already exists
  duplicateEmail: boolean = false;

 //password dosent match
 duplicatePassword:boolean = false;


//URL JSON
private url= "http://10.76.170.180:5500/zenCredentials" 


  constructor(private http: HttpClient) { }

      createUser(signUpForm){
        
        for (let i in this.chcekDB ){
          if(signUpForm.email === this.chcekDB[i].email)
        { 
         this.duplicateEmail = true
         // console.log('ending in duplicate');
          break;
        } 
          else 
        {
            //if(newUser.password === newUser.cnfPassword){
              this.duplicateEmail = false
          this.newCredentials ={
            name: signUpForm.yourName,
            email: signUpForm.email,
            password: signUpForm.cnfPassword}

            this.http.post(this.url, this.newCredentials )
        .subscribe(()=>{
          this.accountStatus = true;
        })

        break;

          }
       
      // } 
      // {
      //   this.duplicatePassword= true
      }

    }
  

//for (let i in this.chcekDB){
      //console.log(i, i)
      //if(newUser.email == this.chcekDB[i].email){
     //   console.log('exists')
      //}else{
      //   }
      // }
      //   console.log('dosent exits')
      
  
    
  ngOnInit() {
    this.http.get(this.url)
    .subscribe((response)=>{
      this.chcekDB = response
    })
  }
}
