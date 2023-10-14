import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Announce } from 'src/Models/Announce';

@Injectable({
  providedIn: 'root'
})
export class AnnouceServiceService {

  annonces!: Announce[];
  apiUrl = 'http://localhost:5000/Product/';

  //const token = localStorage.getItem('token'); 
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTI5MjQ3ZTgyYzI3YzRjYzk3OWM4N2MiLCJFbWFpbCI6ImFsYXRvcmsyQGdtYWlsLmNvbSIsIkZpcnN0X25hbWUiOiJhbGEiLCJMYXN0X25hbWUiOiJ0b3JraGFuaSIsInRpbWUiOiJGcmkgT2N0IDEzIDIwMjMgMjM6MzM6MTYgR01UKzAxMDAgKENlbnRyYWwgRXVyb3BlYW4gU3RhbmRhcmQgVGltZSkiLCJpYXQiOjE2OTcyMzYzOTZ9.qQAPBz0rQK_5TfkDUp0JS5EsoF82mAejXwsr-potE3Q" 


  constructor(private http: HttpClient) {}


  getAnnouncements() {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    return this.http.get<Announce[]>(this.apiUrl+"AllProduct", { headers });
  }
  getAnnounceById(id:string) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
    return  this.http.get<Announce>(this.apiUrl+id, { headers });
  }
  
}
