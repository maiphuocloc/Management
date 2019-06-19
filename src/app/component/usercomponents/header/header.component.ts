import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
    private AuthService: AuthService,
  ) { }

  ngOnInit() {
  }

  logout() {
    localStorage.removeItem('accessToken')
    this.router.navigate(['/signin'])
  }

}
