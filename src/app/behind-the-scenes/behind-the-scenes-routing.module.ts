import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BehindTheScenesComponent } from './behind-the-scenes.component';
import { HomeComponent } from './home/home.component';

const behindRoutes: Routes = [
  {
    path: '',
    component: BehindTheScenesComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'cobra',
        loadChildren: () =>
          import('./cobra/cobra.module').then((m) => m.CobraModule),
        data: {
          title: 'COBRA',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(behindRoutes)],
  exports: [RouterModule],
})
export class BehindTheScenesRoutingModule {}
