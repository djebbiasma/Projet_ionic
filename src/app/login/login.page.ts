import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class LoginPage {

  constructor(private navCtrl: NavController) {}

  // Fonction de connexion (à personnaliser)
  login() {
    // Insérez ici votre logique de connexion
    // Par exemple, rediriger l'utilisateur vers une autre page après la connexion
    this.navCtrl.navigateForward('/home');
  }

}
