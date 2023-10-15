import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import{UserService } from '../service/signin-service.service'


@Component({
  selector: 'app-signin',
  templateUrl: 'signin.page.html',
  styleUrls: ['signin.page.scss']
})
export class SigninPage {

  user: any = {
    name: '',
    email: '',
    password: ''
  };

  constructor(private navCtrl: NavController, private userService: UserService) {}

   registerUser() {
    this.userService.addUser(this.user.name,this.user.email,this.user.password).subscribe({
      next: response => {console.log(response);
        this.navCtrl.navigateForward('/login');},
      error: err => console.log(err),
    })
  }
}



