import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  login(uname: string, pword: string): number {
    if (uname === 'shari19032005@gmail.com' && pword === '123456') {
      localStorage.setItem('token', 'some-admin-token');  // or generate a real token
      localStorage.setItem('role', 'admin'); // assume this user is admin
      return 200;
    } else if (uname === 'user@gmail.com' && pword === 'user123') {
      localStorage.setItem('token', 'some-user-token');
      localStorage.setItem('role', 'user');
      return 200;
    } else {
      return 404;
    }
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  isAdmin(): boolean {
    return localStorage.getItem('role') === 'admin';
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.router.navigate(['login']);
  }
}
