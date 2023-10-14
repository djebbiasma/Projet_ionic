import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Announce } from 'src/Models/Announce';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  annonces!: Announce[];
  apiUrl = 'http://localhost:5000/Product/AllProduct';


  constructor(private http: HttpClient) {}

  ngOnInit(): void {

    //const token = localStorage.getItem('token'); 
    const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTI5MjQ3ZTgyYzI3YzRjYzk3OWM4N2MiLCJFbWFpbCI6ImFsYXRvcmsyQGdtYWlsLmNvbSIsIkZpcnN0X25hbWUiOiJhbGEiLCJMYXN0X25hbWUiOiJ0b3JraGFuaSIsInRpbWUiOiJGcmkgT2N0IDEzIDIwMjMgMjM6MzM6MTYgR01UKzAxMDAgKENlbnRyYWwgRXVyb3BlYW4gU3RhbmRhcmQgVGltZSkiLCJpYXQiOjE2OTcyMzYzOTZ9.qQAPBz0rQK_5TfkDUp0JS5EsoF82mAejXwsr-potE3Q";

    if (token) {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`, 
      });

      this.http.get<Announce[]>(this.apiUrl, { headers }).subscribe(
        (data) => {
          this.annonces = data;
        },
        (error) => {
          console.error('Error:', error);
        }
      );
    } else {
      console.error('Token not available');
    }
  }

  nouvelleAnnonce() {
    // Implement the logic for creating a new announcement or navigate to a new announcement creation page.
  }
}
