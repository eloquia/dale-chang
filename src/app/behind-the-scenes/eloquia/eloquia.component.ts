import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-eloquia',
  templateUrl: './eloquia.component.html',
  styleUrls: ['./eloquia.component.scss'],
})
export class EloquiaComponent implements OnInit {
  constructor(private title: Title, private meta: Meta) {}

  ngOnInit(): void {
    this.title.setTitle('Eloquia');
  }
}
