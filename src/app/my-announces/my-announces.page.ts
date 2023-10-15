import { Component, OnInit } from '@angular/core';
import { Announce } from 'src/Models/Announce';
import { AnnouceServiceService } from '../service/annouce-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-announces',
  templateUrl: './my-announces.page.html',
  styleUrls: ['./my-announces.page.scss'],
})
export class MyAnnouncesPage implements OnInit {
  announces: Announce[] | null = null;


  constructor(private service: AnnouceServiceService , private router: Router) { }

   async ngOnInit() {
    await this.service.getAnnouncements().subscribe(
      (data) => {
        this.announces = data;
      },
      (error) => {
        console.error('Error:', error);
      });
  }

  onItemClick(id:string) {
    this.router.navigate(['announce-details',id]);
  }

  async deleteAnnounce(id:string){
   await  this.service.deleteProdace(id).subscribe(
      (data)=>{
        window.location.href="my-announces";
        //this.router.navigate(['my-announces']);
      },
      (error)=>{
        console.log(error);
        
      }
    )
  }
  
}