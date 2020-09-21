import { User } from './../model/User';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}
  addUser(user: User): void {
    let localStorageContents = localStorage.getItem('Users');
    if (localStorageContents) {
      let users = JSON.parse(localStorage.getItem('Users'));
      users.push(user);
      localStorage.setItem('Users', JSON.stringify(users));
    } else {
      let val = [];
      val.push(user);
      localStorage.setItem('Users', JSON.stringify(val));
    }
  }
}
