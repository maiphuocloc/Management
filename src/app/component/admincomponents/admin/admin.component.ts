import { Component, OnInit } from '@angular/core';
import { ProfilemembershipComponent } from '../profilemembership/profilemembership.component';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  constructor(
    private AuthService: AuthService
  ) { }

  ngOnInit() {
  }

}