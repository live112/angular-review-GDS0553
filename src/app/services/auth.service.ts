import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth } from '../interfaces/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  registerUser(usuario: Auth) {
    return this.http.post(`${this.baseUrl}/users`, usuario);
  }

  getUserEmail(correo: string): Observable<Auth[]> {
    return this.http.get<Auth[]>(`${this.baseUrl}/users?email=${correo}`);
  }
}
