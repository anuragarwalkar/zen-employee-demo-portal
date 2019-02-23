import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
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
}
