import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage { // Mettez à jour le nom de la classe
  annonces = [
    {
      titre: 'Annonce 1',
      description: 'Description de l\'annonce 1ggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg',
    },
    {
      titre: 'Annonce 2',
      description: 'Description de l\'annonce 2ghhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh',
    },
    // Ajoutez d'autres annonces ici
  ];
  annoncesFiltrees = this.annonces; // Créez une copie des annonces pour la recherche

  onSearch(event: CustomEvent) {
    const texteRecherche = event.detail.value.toLowerCase();
    this.annoncesFiltrees = this.annonces.filter(annonce => {
      return annonce.titre.toLowerCase().includes(texteRecherche);
    });
  }
  nouvelleAnnonce() {
    // Implement the logic for creating a new announcement or navigate to a new announcement creation page.
  }
  
}
