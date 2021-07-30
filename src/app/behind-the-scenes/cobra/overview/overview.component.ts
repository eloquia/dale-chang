import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  markdown: any;

  constructor() {}

  ngOnInit(): void {}

  public onReady(): void {
    console.log('onReady');
  }
}
