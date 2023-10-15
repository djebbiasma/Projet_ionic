import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:5000/user'; // Remplacez par l'URL de votre API Node.js

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    const loginData = { Email: email, Password: password };

    return this.http.post(`${this.apiUrl}/login`, loginData);
  }

  // Vous pouvez ajouter d'autres méthodes d'authentification ici (inscription, déconnexion, etc.).
}


