import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RestService } from '../rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userExists: boolean;
  passwordValid: boolean;

  constructor(public rest: RestService,
    private router: Router) {
        this.userExists = true;
        this.passwordValid = true;
     }

  ngOnInit() {
  }

  onLogin(f: NgForm) {
    let user_data = {
        username: f.value.username,
        password: f.value.password // we would ideally use https here.
    }
    this.rest.sendUserCredentials(user_data).subscribe((user_data: any) => {
        if (user_data.valid) {
            this.userExists = true;
            this.passwordValid = true;
            localStorage.setItem('token', JSON.stringify(user_data));
            this.router.navigate(['/brackets']);
        } else if (!user_data.exists) {
            this.userExists = false;
            this.passwordValid = true; // used to get rid of label since user doesn't exist anyway
        } else if (user_data.exists && !user_data.valid) {
            this.userExists = true;
            this.passwordValid = false;
        }
    });
  }

}
