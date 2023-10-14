import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5000'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    // Créez un objet avec les données à envoyer à l'API
    const loginData = {
      Email: email,
      Password: password
    };

    const url = `${this.apiUrl}/user/login`; // Endpoint de la route de connexion

    return this.http.post(url, loginData);
  }
}
