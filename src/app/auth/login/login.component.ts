import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {AuthService} from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm;
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
  ) {
    this.loginForm = this.fb.group({
      login: [''],
      password: [''],
    });
   }


  ngOnInit() {
  }
  onClick() {
    console.log(this.loginForm.value);
    this.auth.login(this.loginForm.value).subscribe(() => {

    });
  }

}
