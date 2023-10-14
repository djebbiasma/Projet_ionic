import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-signin',
  templateUrl: 'signin.page.html',
  styleUrls: ['signin.page.scss']
})
export class SigninPage {

  constructor(private navCtrl: NavController) {}

 
  signup() {
   
    this.navCtrl.navigateForward('/home');
  }

}
