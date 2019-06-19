import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../service/user.service';
import { AuthService } from 'src/app/service/auth.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  loginForm: FormGroup;
  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: this.username,
      password: this.password,
    });
  }

  Login() {
    this.authService.login(this.loginForm.value).subscribe(
      res => {
        // this.toast.setMessage('You successfully registered!', 'success');
        this.router.navigate(['/admin']);
      },
      errors => {
        console.log("error", errors)
        this.loginForm.reset();
      }
      // error => this.toast.setMessage('email already exists', 'danger')
    );
  }

}
