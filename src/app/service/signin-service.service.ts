import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'http://localhost:5000/user/register';


  constructor(private http: HttpClient) {}

  /* addUser(userData: any) {
    return this.http.post(this.url, userData);
  } */

  addUser(username:string,email: string, password: string): Observable<any> {
    const userData = { First_name:username,Email: email, Password: password };
    return this.http.post(this.url, userData);
  }
}
