import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';

import { CobraComponent } from './cobra.component';
import { OverviewComponent } from './overview/overview.component';
import { CobraRoutingModule } from './cobra-routing.module';

@NgModule({
  declarations: [CobraComponent, OverviewComponent],
  imports: [CommonModule, MarkdownModule.forChild(), CobraRoutingModule],
})
export class CobraModule {}
