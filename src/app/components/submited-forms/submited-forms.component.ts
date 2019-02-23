import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from '../../models/User';

@Component({
  selector: 'app-submited-forms',
  templateUrl: './submited-forms.component.html',
  styleUrls: ['./submited-forms.component.css']
})
export class SubmitedFormsComponent implements OnInit{
  showDetails:boolean = false;
  employees:User[];
  welcomeUser:string = 'Anurag';

  constructor(private authService:AuthService){

  }

  onDelete(id:string){
    console.log(id)
  }

  toggleDetails(employee:User){
    employee.hide = !employee.hide
  }
  ngOnInit() {

    this.authService.getEmployees().subscribe(res =>{
      this.employees = res;
    })
    
  }

 
}
