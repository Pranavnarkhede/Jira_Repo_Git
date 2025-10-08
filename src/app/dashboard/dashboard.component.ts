import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  template: `
    <h2>Dashboard</h2>
    <p>Welcome! You are logged in.</p>
    <button (click)="logout()">Logout</button>
  `
})
export class DashboardComponent {
  constructor(private auth: AuthService, private router: Router) {}
  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}