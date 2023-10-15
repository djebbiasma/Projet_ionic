import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url = 'http://localhost:5000/user/login'; // Remplacez par l'URL de votre API Node.js

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    const loginData = { Email: email, Password: password };
    return this.http.post(this.url, loginData);
  }

}
