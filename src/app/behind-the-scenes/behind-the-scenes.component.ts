import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-behind-the-scenes',
  templateUrl: './behind-the-scenes.component.html',
  styleUrls: ['./behind-the-scenes.component.scss'],
})
export class BehindTheScenesComponent implements OnInit {
  constructor(private title: Title, private meta: Meta) {}

  ngOnInit(): void {
    this.title.setTitle('Dale Chang - Blog');
    // this.meta.
    this.meta.addTags([
      { name: 'twitter:card', content: 'summary' },
      { name: 'og:url', content: '/behind-the-scenes' },
      { name: 'og:title', content: 'Dale Chang - Blog' },
      {
        name: 'og:description',
        content: 'Reflections on the technology industry',
      },
      //   { name: 'og:image', content: '' },
    ]);
  }
}
