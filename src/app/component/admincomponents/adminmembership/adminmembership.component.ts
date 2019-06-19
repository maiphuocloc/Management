import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-adminmembership',
  templateUrl: './adminmembership.component.html',
  styleUrls: ['./adminmembership.component.css']
})
export class AdminmembershipComponent implements OnInit {
  employees: User[];

  constructor(
    private UserService: UserService,
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.UserService.getUsers().subscribe(
      data => {
        this.employees = data,
        console.log("data: ", this.employees)
      } ,
      error => {
        console.log(error)
      }
    )
  }

}
