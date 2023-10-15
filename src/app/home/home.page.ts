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
    this.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N…MxNX0.pglXWbJk3G5E0_Pg7KrOgP4esCmL7nBZHDnShSYfEmw"
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