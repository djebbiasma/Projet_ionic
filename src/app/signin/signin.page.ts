import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import{UserService } from '../service/signin-service.service'


@Component({
  selector: 'app-signin',
  templateUrl: 'signin.page.html',
  styleUrls: ['signin.page.scss']
})
export class SigninPage {
  user: any = {  // Déclarez la propriété user ici
    username: '',
    email: '',
    password: ''
  };

  constructor(private navCtrl: NavController, private userService: UserService) {}

  registerUser() {
    this.userService.addUser(this.user).subscribe(
      (response) => {
        console.log('Utilisateur enregistré avec succès :', response);
        this.navCtrl.navigateForward('/home');
      },
      (error) => {
        console.error('Erreur lors de linscription :', error);
      }
    );
  }
  
  signup() {
    // Code pour gérer l'inscription ici
  }
}



