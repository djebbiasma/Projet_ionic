import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-announce-details',
  templateUrl: './announce-details.page.html',
  styleUrls: ['./announce-details.page.scss'],
})
export class AnnounceDetailsPage implements OnInit {

  constructor() { }

  announcement = {
    name:"IPhone 15",
    image:"https://media.istockphoto.com/id/1197063359/fr/photo/femme-utilisant-le-smartphone-diphone-11-pro-dapple.jpg?s=2048x2048&w=is&k=20&c=4oPKhBJR-8OELOhqu1hjrm072dTTrRJc-3mSAvc1tyw=",
    category:"Phones",
    description:"The best iphone 15 ever with good price",
    price:"6000 DT"
  }
  ngOnInit() {
  }

}
