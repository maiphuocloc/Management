import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../service/user.service';
@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {
  verifyForm: FormGroup;
  verify = new FormControl('', [Validators.required]);
  key: string
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.verifyForm = this.formBuilder.group({
      verify: this.verify,
    });
  }

  Verify() {
    this.userService.verify(this.key).subscribe(
      res => {
        // this.toast.setMessage('You successfully registered!', 'success');
        this.router.navigate(['/signin']);
      },
      // error => this.toast.setMessage('email already exists', 'danger')
    );
  }

}
