import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RestService } from '../rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registered: boolean;
  passwordsMatch: boolean;
  usernameTaken: boolean;

  constructor(public rest: RestService,
    private router: Router) {
        this.passwordsMatch = true;
        this.usernameTaken = false;
     }

  ngOnInit() {
  }

  onRegister(f: NgForm) {
    if (f.value.password != f.value.confirmPassword) {
        this.passwordsMatch = false;
    } else {
        this.passwordsMatch = true;
        let user_data = {
            username: f.value.username,
            password: f.value.password // we would ideally use https here.
        }
        this.rest.registerUser(user_data).subscribe((received_user_data: any) => {
            // console.log(user_data);
            if (received_user_data.valid) {
                this.registered = true;
            } else {
                this.usernameTaken = true;
            }
        });
    }
  }

}
