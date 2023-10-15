import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AnnouceServiceService } from '../service/annouce-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-announce-form',
  templateUrl: './announce-form.page.html',
  styleUrls: ['./announce-form.page.scss'],
})
export class AnnounceFormPage implements OnInit {

  productForm: FormGroup;

  constructor(  private formBuilder: FormBuilder,
    private announceService: AnnouceServiceService,
    private router :Router ) {
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
  }

   onSubmit() {
    if (this.productForm.valid) {
      const productData = this.productForm.value;
     this.announceService.getIdUserFromToke().subscribe(
      (data)=>{
         this.announceService.addProduct(productData,data).subscribe(
          (result) => {
            console.log('Product added successfully:', result);
            window.location.href="my-announces";
            //this.router.navigate(['my-announces']);
          },
          (error) => {
            console.error('Error adding product:', error);
          }
        );
      }
     );

    }
  }
  

}
