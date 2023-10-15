import { Component } from '@angular/core';
import { LoginService } from '../service/login-service.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class LoginPage {
  email: string = '';
  password: string = '';


  formData = {
    email: '',
    password: '',
  };

  constructor(private loginService: LoginService, private navCtrl: NavController) {}
  ngOnInit() {}

  onSubmit() {
    this.loginService.login(this.formData.email, this.formData.password).subscribe({
      next: response => {localStorage.setItem("token",JSON.stringify(response).substring(12, JSON.stringify(response).length - 2));
      this.navCtrl.navigateForward('/home'); },
      error: err => console.log('Erreur lors de la connexion :', err)
    });  }
}
