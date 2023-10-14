import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyAnnouncesPage } from './my-announces.page';

const routes: Routes = [
  {
    path: '',
    component: MyAnnouncesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyAnnouncesPageRoutingModule {}
