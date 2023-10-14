import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-announces',
  templateUrl: './my-announces.page.html',
  styleUrls: ['./my-announces.page.scss'],
})
export class MyAnnouncesPage implements OnInit {

  constructor() { }

  annonces = [
    {
      name:"IPhone 15",
      image:"https://media.istockphoto.com/id/1197063359/fr/photo/femme-utilisant-le-smartphone-diphone-11-pro-dapple.jpg?s=2048x2048&w=is&k=20&c=4oPKhBJR-8OELOhqu1hjrm072dTTrRJc-3mSAvc1tyw=",
      category:"Phones",
      description:"The best iphone 15 ever with good price",
      price:"6000 DT"
    },
    {
      name:"IPhone 15",
      image:"https://media.istockphoto.com/id/1197063359/fr/photo/femme-utilisant-le-smartphone-diphone-11-pro-dapple.jpg?s=2048x2048&w=is&k=20&c=4oPKhBJR-8OELOhqu1hjrm072dTTrRJc-3mSAvc1tyw=",
      category:"Phones",
      description:"The best iphone 15 ever with good price",
      price:"6000 DT"
    },
  ];

  ngOnInit() {
  }

}
