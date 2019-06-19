import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-profilemembership',
  templateUrl: './profilemembership.component.html',
  styleUrls: ['./profilemembership.component.css']
})
export class ProfilemembershipComponent implements OnInit {

  emp: User;

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
        this.emp = data,
        console.log("data: ", this.emp)
      } ,
      error => {
        console.log(error)
      }
    )
  }
}
