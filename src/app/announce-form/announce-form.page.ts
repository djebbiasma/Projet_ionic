import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-announce-form',
  templateUrl: './announce-form.page.html',
  styleUrls: ['./announce-form.page.scss'],
})
export class AnnounceFormPage implements OnInit {

  productForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: [''],
      Price: ['', Validators.required],
      Quantity: ['', Validators.required],
      Images: [''],
      Category: ['', Validators.required],
      user: [''],
    });
  }

  ngOnInit() {
  }

}
