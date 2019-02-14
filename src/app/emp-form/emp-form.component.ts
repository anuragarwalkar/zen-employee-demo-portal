import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-emp-form',
  templateUrl: './emp-form.component.html',
  styleUrls: ['./emp-form.component.css']
})
export class EmpFormComponent implements OnInit {

  //Array For State DropDown Menu
  stateLabels =[
    {id:'Maharashtra', name: 'Maharashtra'},
    {id:'Bihar', name: 'Bihar'}
  ]

  CloseModule:String
  
  //Boolean to activate HTML H3 tag
 // isAdded: boolean = false;

  //Object to put form data onto the server
  addObject : object ={};

  //JSON server URL
  private url = "http://localhost:5000/employeeFormData";

  //dependancies injection
  constructor(private http : HttpClient, 
    private router: Router) { }
  

  submitForm=(newObject)=>{

    this.CloseModule="modal"
    //if(confirm("Are you sure you want to submit the form?")){
      console.log("working");
      this.addObject = {
        firstName: newObject.firstName,
        lastName: newObject.lastName,
        gender: newObject.gender,
        dob: newObject.dob,
        position:newObject.position,
        address: newObject.address,
        state:newObject.state,
        city:newObject.city,
        pin:newObject.pin,
        mobile:newObject.mobile,
      }
  
      this.http.post(this.url, this.addObject)
      .subscribe(()=>{
        //this.isAdded = true;
        this.router.navigate(['Submited-forms'])
      })
      
    }
    
    
    //alert("Your Form Has been Submited");

    //this.router.navigate(['Submited-forms']);

  //}

  // mobileChange(mobile){
  //     console.log(mobile)
  // }

  ngOnInit() {
  }
}
