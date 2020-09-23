import { AlertifyService } from './../services/alertify.service';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  loggedinUser: string;
  constructor(private alertify: AlertifyService) {}

  ngOnInit() {}

  loggedin() {
    this.loggedinUser = localStorage.getItem('token');
    return this.loggedinUser;
  }
  onLogout() {
    localStorage.removeItem('token');
    this.alertify.success('You are logged out!');
  }
}
