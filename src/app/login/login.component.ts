import { Component, OnInit, Input, inject, Inject } from '@angular/core';
import { Auth } from 'aws-amplify';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  constructor(private router: Router) { }
  ngOnInit(): void {
  }
  async loginWithCognito() {
    await Auth.signIn(this.email.toString(), this.password.toString()).then(user => {
      console.log(user);
      if (user.signInUserSession != null) {
        alert('You are logged in successfully !');
        this.router.navigate(['home']);
      }
    }).catch(err => {
      console.log(err);
      alert(err.message)
    });
  }
}