import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';

import { BehindTheScenesRoutingModule } from './behind-the-scenes-routing.module';
import { BehindTheScenesComponent } from './behind-the-scenes.component';
import { BehindTheScenesNavComponent } from './behind-the-scenes-nav/behind-the-scenes-nav.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    BehindTheScenesComponent,
    BehindTheScenesNavComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    MarkdownModule.forChild(),
    BehindTheScenesRoutingModule,
  ],
})
export class BehindTheScenesModule {}
