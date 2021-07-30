import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private title: Title, private meta: Meta) {}

  ngOnInit(): void {
    this.title.setTitle('Dale Chang - Software Engineer');
    // this.meta.
    this.meta.addTags([
      { name: 'twitter:card', content: 'summary' },
      { name: 'og:url', content: '/' },
      { name: 'og:title', content: 'Dale Chang - Software Engineer' },
      { name: 'og:description', content: 'Full Stack Software Engineer' },
      //   { name: 'og:image', content: '' },
    ]);
  }
}
