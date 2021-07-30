import { Component } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent {
  markdown: any;

  constructor() {}

  public onReady(): void {
    console.log('onReady');
  }
}
