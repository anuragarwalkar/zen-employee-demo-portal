import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/User';
import { EmployeeService } from 'src/app/services/employee.service';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit  {

  @ViewChild('userRegistrationForm') form :any

  id:string

  constructor(private employeeService:EmployeeService, private router:Router, 
    private route:ActivatedRoute, private flashMessage:FlashMessagesService){

  }

  user:User ={
    firstName: '',
      lastName: '',
      email:'',
      position: '',
      address: '',
      mobile: '',
      hide: true,
  }

  positions:Array<{}> =[
    {value:'default', name:'Select...' },
    {value:'Software Developer', name:'Software Developer' },
  {value:'Software Tester', name:'Software Tester' },
  {value:'Network Engineer', name:'Network Engineer' },
  {value:'System Administrator', name:'System Administrator' },
  {value:'Accountant', name:'Accountant' },
  ]

  ngOnInit(){

    this.id = this.route.snapshot.params['id']

    this.employeeService.getEmployee(this.id).subscribe(response=>{
      this.user =response
    })


  }
 
  onUpdate({value, valid}: {value:User, valid:boolean}){
    if(!valid){
      this.flashMessage.show('Please fill out the form correctly', {
        cssClass: 'alert-danger', timeout:4000
      });
    }else{
      this.employeeService.updateEmployee(this.user)
      this.flashMessage.show('Employee has been updated', {
        cssClass: 'alert-success', timeout:4000
      });

      setTimeout(() => {
        this.router.navigate(['/zenhome'])
      }, 2000);

    }
  }

}
