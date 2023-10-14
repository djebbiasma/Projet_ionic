import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnnounceDetailsPage } from './announce-details.page';

const routes: Routes = [
  {
    path: '',
    component: AnnounceDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnnounceDetailsPageRoutingModule {}
