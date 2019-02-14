import { Component, OnInit, Input } from '@angular/core';
import {AuthService} from '../auth.service'




@Component({
  selector: 'app-zen-home',
  templateUrl: './zen-home.component.html',
  styleUrls: ['./zen-home.component.css']
})
export class ZenHomeComponent implements OnInit {

  message: string;

  constructor(private auth: AuthService ) {

    
   }

  ngOnInit() {
    this.auth.currentUser.subscribe(message=> this.message = message)

  }

}
