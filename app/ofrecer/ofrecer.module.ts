import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OfrecerPageRoutingModule } from './ofrecer-routing.module';

import { OfrecerPage } from './ofrecer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OfrecerPageRoutingModule
  ],
  declarations: [OfrecerPage]
})
export class OfrecerPageModule {}
