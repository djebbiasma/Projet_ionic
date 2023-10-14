import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnnounceFormPageRoutingModule } from './announce-form-routing.module';

import { AnnounceFormPage } from './announce-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule, 
    AnnounceFormPageRoutingModule
  ],
  declarations: [AnnounceFormPage]
})
export class AnnounceFormPageModule {}
