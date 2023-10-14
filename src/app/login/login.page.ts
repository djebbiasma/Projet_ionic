import { Component } from '@angular/core';
import { LoginService } from '../service/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class LoginPage {
  email: string = ''; // Initialisez ces valeurs à des chaînes vides
  password: string = '';

  constructor(private loginService: LoginService) {}

  login() {
    // Utilisez les valeurs de l'email et du mot de passe saisies par l'utilisateur
    this.loginService.login(this.email, this.password).subscribe(
      (response) => {
        console.log('Réponse de l\'API après la connexion :', response);

        // Vous pouvez gérer la réponse de l'API ici (par exemple, stocker le token, rediriger l'utilisateur, etc.).
      },
      (error) => {
        console.error('Erreur lors de la connexion :', error);
        // Gérez les erreurs d'authentification ici.
      }
    );
  }
}
