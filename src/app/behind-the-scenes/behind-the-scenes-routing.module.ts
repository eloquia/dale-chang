import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BehindTheScenesComponent } from './behind-the-scenes.component';

const behindRoutes: Routes = [
  {
    path: '',
    component: BehindTheScenesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(behindRoutes)],
  exports: [RouterModule],
})
export class BehindTheScenesRoutingModule {}
