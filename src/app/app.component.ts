import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private menuController: MenuController,
    private router: Router, private navCtrl: NavController 
  ) { }

  closeMenuAndNavigate(route: string) {
    this.menuController.close();
    this.router.navigate([route]); 
  }

  logout(){
    this.menuController.close();
    localStorage.clear();
    this.navCtrl.navigateForward('/login');

  }

}
