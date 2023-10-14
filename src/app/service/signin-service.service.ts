import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://localhost:5000/user/register';


  constructor(private http: HttpClient) {}

  addUser(userData: any) {
    const url = `${this.apiUrl}`; // Endpoint de l'ajout d'un utilisateur
    return this.http.post(url, userData);
  }
}