import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { IntroComponent } from './intro/intro.component';
import { AboutComponent } from './about/about.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { WorkComponent } from './work/work.component';
import { OutsideWorkComponent } from './outside-work/outside-work.component';
import { CertificationsComponent } from './certifications/certifications.component';

@NgModule({
  declarations: [HomeComponent, IntroComponent, AboutComponent, TechnologiesComponent, WorkComponent, OutsideWorkComponent, CertificationsComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
