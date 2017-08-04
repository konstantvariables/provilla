import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { AuthService } from '../services/auth.service';
import { ToastComponent } from '../shared/components/toast/toast.component';
import { routerTransition } from '../router.animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  email = new FormControl('', [Validators.required ]);
  password = new FormControl('', [Validators.required]);


  constructor(private auth: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    public toast: ToastComponent) { }

  ngOnInit() {
    if (this.auth.loggedIn) {
      this.router.navigate(['/']);
    }

    this.loginForm = this.formBuilder.group({
      email: this.email,
      password: this.password
    });
  }

  onLoggedin() {
    this.auth.login(this.loginForm.value).subscribe(
      res => {
        localStorage.setItem('isLoggedin', 'true');
        if (this.auth.currentUser.role === 'cleaner' || this.auth.currentUser.role === 'owner') {
          this.router.navigate(['/jobs']);
        } else {
          this.router.navigate(['/users']);
        }
      },
      error => this.toast.setMessage('Invalid email or password!', 'danger')
    );
  }

  setClassEmail() {
    return { 'has-danger': !this.email.pristine && !this.email.valid };
  }
  setClassPassword() {
    return { 'has-danger': !this.password.pristine && !this.password.valid };
  }

}
