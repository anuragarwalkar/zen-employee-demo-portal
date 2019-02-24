import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

constructor(private afAuth:AngularFireAuth, private router:Router){

}

  logOut(){
    this.afAuth.auth.signOut()
    this.router.navigate(['/'])
  }
}
