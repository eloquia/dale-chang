import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BehindTheScenesRoutingModule } from './behind-the-scenes-routing.module';
import { BehindTheScenesComponent } from './behind-the-scenes.component';

@NgModule({
  declarations: [BehindTheScenesComponent],
  imports: [CommonModule, BehindTheScenesRoutingModule],
})
export class BehindTheScenesModule {}
