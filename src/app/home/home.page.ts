import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Announce } from 'src/Models/Announce';
import { Router } from '@angular/router';
import { AnnouceServiceService } from '../service/annouce-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  annonces!: Announce[];
  apiUrl = 'http://localhost:5000/Product/AllProduct';


  constructor(private service: AnnouceServiceService , private router: Router) {}


  token!:string;
  ngOnInit(): void {

    //const token = localStorage.getItem('token'); 
    this.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTI5MjQ3ZTgyYzI3YzRjYzk3OWM4N2MiLCJFbWFpbCI6ImFsYXRvcmsyQGdtYWlsLmNvbSIsIkZpcnN0X25hbWUiOiJhbGEiLCJMYXN0X25hbWUiOiJ0b3JraGFuaSIsInRpbWUiOiJGcmkgT2N0IDEzIDIwMjMgMjM6MzM6MTYgR01UKzAxMDAgKENlbnRyYWwgRXVyb3BlYW4gU3RhbmRhcmQgVGltZSkiLCJpYXQiOjE2OTcyMzYzOTZ9.qQAPBz0rQK_5TfkDUp0JS5EsoF82mAejXwsr-potE3Q" 
    this.service.getAnnouncements().subscribe(
      (data) => {
        this.annonces = data;
      },
      (error) => {
        console.error('Error:', error);
      });
  }

  onItemClick(id:string) {
    this.router.navigate(['announce-details',id]);
  }
  
  nouvelleAnnonce() {
    // Implement the logic for creating a new announcement or navigate to a new announcement creation page.
  }
}
