import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { editUser } from '../editUser';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

 id: number;
 
  data:editUser;
  
  forms: any =[];
  editedForm: object ={};
  private url = "http://10.76.170.180:5800/employeeFormData";


  stateLabels =[
    {"id":"Maharashtra", "name":"Maharashtra"},
    {"id":"Bihar", "name":"Bihar"},

]



  constructor(private router: Router, 
              private route: ActivatedRoute, 
              private http : HttpClient) { }

  editForm(editEmployeeForm){
    this.editedForm ={
      firstName: editEmployeeForm.firstName,
      lastName: editEmployeeForm.lastName,
      gender: editEmployeeForm.gender,
      dob: editEmployeeForm.dob,
      position: editEmployeeForm.position,
      address: editEmployeeForm.address,
      state: editEmployeeForm.state,
      city: editEmployeeForm.city,
      pin: editEmployeeForm.pin,
      mobile: editEmployeeForm.mobile
    }

    this.http.put(this.url + '/' + this.id, this.editedForm )
    .subscribe(()=>{
      this.router.navigate(['Submited-forms'])
      //console.log('operation sucessfull')
    })

  }

  // testChange(test){
  //   console.log(test)
  // }
  ngOnInit() {
    this.route.params.subscribe(params =>{
      this.id = params['id']
    // console.log(this.id)
    });

      this.http.get(this.url)
      .subscribe(response =>{
        this.forms = response;

        // console.log(response)
        // console.log(this.forms)

        for(let i in this.forms){
          if (this.forms[i].id == this.id){
            this.data = this.forms[i];
           // console.log(this.forms[i])
            break;

          }
        }
      })

  }

}
