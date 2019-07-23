import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { JwtHelperService } from '@auth0/angular-jwt';

import { UserService } from './user.service';
import { User } from '../shared/models/user.model';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService { 
  loggedIn = false;
  isAdmin = false;

  currentUser: User = new User();

  constructor(private userService: UserService,
              private router: Router,
              private jwtHelper: JwtHelperService) {
    const token = localStorage.getItem('accessToken');
    if (token) {
      const decodedUser = this.decodeUserFromToken(token);
      this.setCurrentUser(decodedUser);
    }
  }

  login(emailAndPassword) {
    return this.userService.login(emailAndPassword).pipe(map(
      res => {
      console.log("token: ", res)
        localStorage.setItem('accessToken', res.accessToken);
        const decodedUser = this.decodeUserFromToken(res.accessToken);
        this.setCurrentUser(decodedUser);
        return this.loggedIn;
      }
    ));
  }

  loggedIN(){
    return localStorage.getItem('accessToken')
  }

  logout() {
    localStorage.removeItem('accessToken');
    this.loggedIn = false;
    this.isAdmin = false;
    this.currentUser = new User();
    this.router.navigate(['/home']);
  }

  decodeUserFromToken(token) {
    return this.jwtHelper.decodeToken(token);
  }

  setCurrentUser(decodedUser) {
    this.loggedIn = true;
    this.currentUser.username = decodedUser.username;
    this.currentUser.email = decodedUser.email;
    this.currentUser.role = decodedUser.role;
  }

}