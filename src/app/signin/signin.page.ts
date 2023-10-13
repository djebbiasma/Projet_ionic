import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-signin',
  templateUrl: 'signin.page.html',
  styleUrls: ['signin.page.scss']
})
export class SigninPage {

  constructor(private navCtrl: NavController) {}

  // Fonction d'inscription (à personnaliser)
  signup() {
    // Insérez ici votre logique d'inscription
    // Par exemple, rediriger l'utilisateur vers une autre page après l'inscription
    this.navCtrl.navigateForward('/home');
  }

}
