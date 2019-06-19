import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-adminusser',
  templateUrl: './adminusser.component.html',
  styleUrls: ['./adminusser.component.css']
})
export class AdminusserComponent implements OnInit {
  lenders: User[];

  constructor(
    private UserService: UserService
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.UserService.getUsers().subscribe(
      data => {
        this.lenders = data,
        console.log("data: ", this.lenders)
      } ,
      error => {
        console.log(error)
      }
    )
  }
}
