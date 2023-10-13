import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnnoncesPageRoutingModule } from './annonces-routing.module';

import { AnnoncesPage } from './annonces.page';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule, 
    AnnoncesPageRoutingModule
  ],
  declarations: [AnnoncesPage]
})
export class AnnoncesPageModule {}
