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


  //token!:string;
  ngOnInit(): void {
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

  selectedCategory: string = 'all'; 

  filterByCategory() {
    if (this.selectedCategory !== 'all') {
      this.service.getProductByCategory(this.selectedCategory).subscribe(
        (data) => {
          this.annonces = data;
        },
        (error) => {
          if (error.status === 404) {
            this.annonces=[];
            console.log('Category not found.');
          } else {
            // Handle other errors
            console.error('Error:', error);
          }
        }
      );
    }else{
      this.service.getAnnouncements().subscribe(
        (data) => {
          this.annonces = data; 
        },
        (error) => {
          console.error('Error:', error);
        });
    }
  }

}