import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-submited-forms',
  templateUrl: './submited-forms.component.html',
  styleUrls: ['./submited-forms.component.css']
})
export class SubmitedFormsComponent implements OnInit {
  
  empFormArray =[];

  rowId: number;

  deleteConfirmation(empFormData){
    this.rowId = empFormData.id
  }


  private url = "http://10.76.170.180:5800/employeeFormData";

  constructor(private http : HttpClient) {
   
  }
  fetchData(){
    this.http.get<any>(this.url).subscribe(response=>{
      this.empFormArray = response;
      // console.log('hello', response)
    })
  }
  
  deleteData(){
    //console.log('method is working')
    // if(confirm("Are you sure you want to delete this item?")){
      this.http.delete<any>(this.url + "/" + this.rowId )
      .subscribe(()=>{
        let index = this.empFormArray.indexOf(this.rowId);
        this.empFormArray.splice(index,1);
        // this.fetchData()
      })}
    // }


    ngOnInit() {
      this.fetchData()
    }
}
