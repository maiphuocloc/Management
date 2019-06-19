import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/service/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailuser',
  templateUrl: './detailuser.component.html',
  styleUrls: ['./detailuser.component.css']
})
export class DetailuserComponent implements OnInit {
  lender: User;

  constructor(
    private router: Router,
    private UserService: UserService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    var Username = this.route.snapshot.params['username'];
    this.getUser(Username)
  }
  getUser(Username: String) {
    this.UserService.getUser(Username).subscribe(
      data => {
        this.lender = data,
        console.log("data: ", this.lender)
      } ,
      error => {
        console.log(error)
      }
    )
  }
}
