import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CobraComponent } from './cobra.component';
import { OverviewComponent } from './overview/overview.component';

const behindRoutes: Routes = [
  {
    path: '',
    component: CobraComponent,
  },
  {
    path: 'overview',
    component: OverviewComponent,
    data: {
      label: 'Overview',
      markdownPath: 'overview.md',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(behindRoutes)],
  exports: [RouterModule],
})
export class CobraRoutingModule {}
