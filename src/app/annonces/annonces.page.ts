import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AnnouceServiceService } from '../service/annouce-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Announce } from 'src/Models/Announce';

@Component({
  selector: 'app-annonces',
  templateUrl: 'annonces.page.html',
  styleUrls: ['annonces.page.scss']
})

export class AnnoncesPage {
  announce!: Announce;
  productForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private announceService: AnnouceServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: [''],
      Price: ['', Validators.required],
      Quantity: ['', Validators.required],
      Images: [''],
      Category: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');

      if (id) {
        this.announceService.getAnnounceById(id).subscribe((data: Announce) => {
          this.announce = data;
          this.populateFormWithAnnounceData();
        });
      }
    });
  }

  populateFormWithAnnounceData() {
    if (this.announce) {
      this.productForm.patchValue({
        name: this.announce.name,
        description: this.announce.description,
        Price: this.announce.Price,
        Quantity: this.announce.Quantity,
        Images: this.announce.Images,
        Category: this.announce.Category,
      });
    }
  }

  async onSubmit() {
    if (this.productForm.valid) {
      const productData = this.productForm.value;
      await this.announceService.updateProduct(this.announce._id, productData).subscribe(
        (result) => {
          console.log('Product updated successfully:', result);
          window.location.href="/my-announces";
        },
        (error) => {
          console.error('Error updating product:', error);
        }
      );
    }
  }
}
