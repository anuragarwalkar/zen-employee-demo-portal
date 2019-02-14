import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  message:string;

  //method for RouteGuard
  logOut(){
    this.auth.setLoggedIn(false);
    this.router.navigate(['']);
  }

  //DI
  constructor(private auth: AuthService, 
              private router: Router) { }

  ngOnInit() {
  }

}
