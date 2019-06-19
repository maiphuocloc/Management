import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/service/user.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detailmembership',
  templateUrl: './detailmembership.component.html',
  styleUrls: ['./detailmembership.component.css']
})
export class DetailmembershipComponent implements OnInit {

  info: User;

  constructor(
    private router: Router,
    private UserService: UserService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    var inf = this.route.snapshot.params['username'];
    this.getUser(inf)
  }
  getUser(inf: String) {
    this.UserService.getUser(inf).subscribe(
      data => {
        this.info = data,
        console.log("data: ", this.info)
      } ,
      error => {
        console.log(error)
      }
    )
  }
}
