import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  employeesCollection: AngularFirestoreCollection<User>;
  employeeDoc: AngularFirestoreDocument<User>;
  employees:Observable<User[]>
  employee:Observable<User>


  constructor(private afs:AngularFirestore) {
    this.employeesCollection = afs.collection<User>('employees');
   }


   getEmployees():Observable<User[]>{
     this.employees = this.employeesCollection.snapshotChanges().pipe(
       map(action => action.map(action=>{
         const data = action.payload.doc.data() as User;
         data.id = action.payload.doc.id;
         return data
       }))
     )

     return this.employees

   }

   getEmployee(id:string):Observable<User>{
    this.employeeDoc = this.afs.doc<User>(`employees/${id}`);
    this.employee = this.employeeDoc.snapshotChanges().pipe(
      map(action =>{
        if(action.payload.exists === false){
          return null
        }else{
          const data = action.payload.data() as User;
          data.id = action.payload.id;
          return data
        }
      }) 
    )
    return this.employee
   }

   addEmployee(employee:User){
     return new Promise((resolve, reject)=>{
      this.employeesCollection.add(employee).then(
        (data) => resolve(data), (error)=>reject(error)
      )
     })
    
   }


   updateEmployee(employee:User){
    this.employeeDoc = this.afs.doc(`employees/${employee.id}`);
    this.employeeDoc.update(employee)

   }

   deleteEmployee(id:string){
     this.employeeDoc = this.afs.doc(`employees/${id}`);
     this.employeeDoc.delete()
   }
}
