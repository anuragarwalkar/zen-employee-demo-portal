import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-submited-forms',
  templateUrl: './submited-forms.component.html',
  styleUrls: ['./submited-forms.component.css']
})
export class SubmitedFormsComponent implements OnInit{
  showDetails:boolean = false;
  employees:User[];
  welcomeUser:string = 'Anurag';

  constructor(private employeeService:EmployeeService){

  }

  onDelete(id:string){
    if(confirm('Are you sure')){
      this.employeeService.deleteEmployee(id)
    }
  }

  toggleDetails(employee:User){
    employee.hide = !employee.hide
  }
  ngOnInit() {

    this.employeeService.getEmployees().subscribe(res =>{
      this.employees = res;
    })
    
  }

 
}
