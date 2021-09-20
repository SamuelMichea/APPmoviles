import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfrecerPage } from './ofrecer.page';

const routes: Routes = [
  {
    path: '',
    component: OfrecerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfrecerPageRoutingModule {}
