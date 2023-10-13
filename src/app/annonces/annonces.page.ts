import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-annonces',
  templateUrl: 'annonces.page.html',
  styleUrls: ['annonces.page.scss']
})
export class AnnoncesPage {
  annonceForm: FormGroup;
  categories: { id: number; name: string }[]; // Define the 'categories' property

  constructor(private formBuilder: FormBuilder, private navCtrl: NavController) {
    this.annonceForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      categoryId: [null, Validators.required]
    });

    this.categories = [
      { id: 1, name: 'Category 1' },
      { id: 2, name: 'Category 2' },
    
    ];
  }

  submitForm() {
    if (this.annonceForm.valid) {
      
      const formData = this.annonceForm.value;

      this.navCtrl.navigateForward('/annonces');
    }
  }
}
