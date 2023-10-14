import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyAnnouncesPageRoutingModule } from './my-announces-routing.module';

import { MyAnnouncesPage } from './my-announces.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyAnnouncesPageRoutingModule
  ],
  declarations: [MyAnnouncesPage]
})
export class MyAnnouncesPageModule {}
