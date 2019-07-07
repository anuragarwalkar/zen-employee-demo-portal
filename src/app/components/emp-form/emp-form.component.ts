import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { FlashMessagesService } from 'angular2-flash-messages';
import { EmployeeService } from 'src/app/services/employee.service';


@Component({
  selector: 'app-emp-form',
  templateUrl: './emp-form.component.html',
  styleUrls: ['./emp-form.component.css']
})
export class EmpFormComponent implements OnInit {

  @ViewChild('userRegistrationForm') form:any
  user:User ={
    firstName: '',
      lastName: '',
      email:'',
      position: 'default',
      address: '',
      mobile: '',
      hide: true,
  }


  constructor(private flashMessage: FlashMessagesService, 
    private employeeService:EmployeeService,
    private router:Router){

  }

  positions:Array<{}> =[
    {value:'default', name:'Select...' },
    {value:'Software Developer', name:'Software Developer' },
  {value:'Software Tester', name:'Software Tester' },
  {value:'Network Engineer', name:'Network Engineer' },
  {value:'System Administrator', name:'System Administrator' },
  {value:'Accountant', name:'Accountant' },
]

  

  onSubmit({value, valid}: {value:User,valid:boolean}){
    console.log(value,valid);
    if(!valid){
      this.flashMessage.show('Please fill out the form correctly', {
        cssClass: 'alert-danger', timeout:4000
      });
    }else{

      this.employeeService.addEmployee(value).then(()=>{
        this.flashMessage.show('New Employee added', {
          cssClass:'alert-success', timeout:5000
        });

        this.router.navigate(['/zenhome']);
      });

     

    }
  }
  
  ngOnInit() {
  }
}
