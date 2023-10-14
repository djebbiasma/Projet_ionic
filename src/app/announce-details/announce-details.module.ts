import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnnounceDetailsPageRoutingModule } from './announce-details-routing.module';

import { AnnounceDetailsPage } from './announce-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnnounceDetailsPageRoutingModule
  ],
  declarations: [AnnounceDetailsPage]
})
export class AnnounceDetailsPageModule {}
