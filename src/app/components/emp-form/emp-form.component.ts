import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Router } from '@angular/router';
import { User } from 'src/app/models/User';


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

  positions:Array<{}> =[
    {value:'default', name:'Select...' },
    {value:'Software Developer', name:'Software Developer' },
  {value:'Software Tester', name:'Software Tester' },
  {value:'Network Engineer', name:'Network Engineer' },
  {value:'System Administrator', name:'System Administrator' },
  {value:'Accountant', name:'Accountant' },
]

  

  onSubmit({value, valid}: {value:User,valid:boolean}){
    console.log(value, valid)

    this.form.reset();
  }
  
  ngOnInit() {
  }
}
