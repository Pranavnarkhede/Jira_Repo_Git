
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
    private apiUrl = 'https://dummyjson.com/auth/login';
    private readonly TOKEN_KEY = 'token';
    constructor(private http: HttpClient) { }
    login(username: string, password: string): Observable<any> {
        return this.http.post<any>(this.apiUrl, { username, password })
            .pipe(tap(res => localStorage.setItem(this.TOKEN_KEY, res.token)));
    }
    logout() { localStorage.removeItem(this.TOKEN_KEY);  }
    isLoggedIn(): boolean { return !!localStorage.getItem(this.TOKEN_KEY);  }
    getToken(): string | null { return localStorage.getItem(this.TOKEN_KEY); }
}

