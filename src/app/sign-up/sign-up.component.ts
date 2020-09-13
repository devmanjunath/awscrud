import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  email: string;
  password: string;
  phoneNumber: string;
  name: string;
  familyName: string;
  constructor(private router: Router) { }
  ngOnInit(): void {
  }
  register() {
    var params = {
      username: this.email,
      password: this.password,
      attributes: {
        email: this.email,
        name: this.name,
        family_name: this.familyName,
        phone_number: this.phoneNumber
      }
    };
    Auth.signUp(params).then(() => {
      alert('User signup completed , please check verify your email.');
      this.router.navigate(['login']);
    }
    ).catch(err => alert(err.message));
  }
}