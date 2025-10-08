import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = 'kminchelle'; // DummyJSON test user
  password = '0lelplR';    // DummyJSON password
  error = '';
  constructor(private auth: AuthService, private router: Router) {}
  login() {
    this.auth.login(this.username, this.password).subscribe({
      next: () => this.router.navigate(['/dashboard']),
      error: (err) => this.error = 'Login failed!'
    });
  }
}