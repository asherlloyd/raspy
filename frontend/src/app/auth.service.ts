import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(private router: Router) { }

  canActivate() {
    if (!this.isAuthenticated()) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
  
  isAuthenticated() {
      const token = JSON.parse(localStorage.getItem('token'));
      var currDate = new Date().getTime();
      return (token.valid && (currDate < token.expires));
  }

}
