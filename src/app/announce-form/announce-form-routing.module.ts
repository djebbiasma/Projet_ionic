import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnnounceFormPage } from './announce-form.page';

const routes: Routes = [
  {
    path: '',
    component: AnnounceFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnnounceFormPageRoutingModule {}
