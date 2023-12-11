import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainService } from '../../_core/services/main.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, MainRoutingModule],
  providers: [MainService],
})
export class MainModule {}
