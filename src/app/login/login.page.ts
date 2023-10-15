import { Component } from '@angular/core';
import { LoginService } from '../service/login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class LoginPage {
  email: string = ''; 
  password: string = '';

  constructor(private loginService: LoginService  , private router: Router) { }

  login() {
    this.loginService.login(this.email, this.password).subscribe(
      (response) => {
        console.log('Réponse de l\'API après la connexion :', response);

        localStorage.setItem('authToken', response.token);
        this.router.navigate(['/home']);

      },
      (error) => {
        console.error('Erreur lors de la connexion :', error);
      }
    );
  }
}
