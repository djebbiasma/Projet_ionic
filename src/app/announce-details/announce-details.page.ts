import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Announce } from 'src/Models/Announce';
import { AnnouceServiceService } from '../service/annouce-service.service';

@Component({
  selector: 'app-announce-details',
  templateUrl: './announce-details.page.html',
  styleUrls: ['./announce-details.page.scss'],
})
export class AnnounceDetailsPage implements OnInit {
  announcement?: Announce|null;

  constructor(private service: AnnouceServiceService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');

      if (id) {
        this.service.getAnnounceById(id).subscribe((data: Announce) => {
          this.announcement = data; 
        });
      }
    });
  }
}