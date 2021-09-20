import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ofrecer2PageRoutingModule } from './ofrecer2-routing.module';

import { Ofrecer2Page } from './ofrecer2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ofrecer2PageRoutingModule
  ],
  declarations: [Ofrecer2Page]
})
export class Ofrecer2PageModule {}
