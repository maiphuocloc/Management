import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuardLogin implements CanActivate {

  constructor(public auth: AuthService,
    private router: Router,
    ) {}

  canActivate() {
    return this.auth.loggedIn;
  }

}