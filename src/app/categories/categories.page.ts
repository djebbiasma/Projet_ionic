import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-categories',
  templateUrl: 'categories.page.html',
  styleUrls: ['categories.page.scss']
})
export class CategoriesPage {
  categories: string[] = [
    'Catégorie 1',
    'Catégorie 2',
    'Catégorie 3',
    'Catégorie 4',
    // Ajoutez d'autres catégories ici
  ];

  constructor(private navCtrl: NavController) {}

  selectCategory(category: string) {
    // Au lieu de transmettre la catégorie, transmettez la liste entière des catégories
    this.navCtrl.navigateForward('/annonces', {
      state: { categories: this.categories }
    });
  }
}
