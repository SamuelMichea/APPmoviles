import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ofrecer2Page } from './ofrecer2.page';

const routes: Routes = [
  {
    path: '',
    component: Ofrecer2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ofrecer2PageRoutingModule {}
