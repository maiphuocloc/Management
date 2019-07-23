import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup;

  name = new FormControl('', [Validators.required]);
  username = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  phone = new FormControl('', [Validators.required]);
  address = new FormControl('', [Validators.required]);

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.password,
      phone: this.phone,
      address: this.address,
    });
  }

  
  register() {
    console.log(this.registerForm.value);
    this.userService.register(this.registerForm.value).subscribe(
      res => {
        this.router.navigate(['/verify']);
      }
    );
  }

}
