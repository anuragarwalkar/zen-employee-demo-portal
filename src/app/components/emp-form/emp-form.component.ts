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
      position: 'def',
      address: '',
      mobile: '',
  }

  positions:Array<{}> =[
    {value:'def', name:'Select...' },
    {value:'sd', name:'Software Developer' },
  {value:'st', name:'Software Tester' },
  {value:'ne', name:'Network Engineer' },
  {value:'he', name:'Hardware Engineer' }
]

  

  onSubmit({value, valid}: {value:User,valid:boolean}){
    console.log(value, valid)

    this.form.reset();
  }
  
  ngOnInit() {
  }
}
