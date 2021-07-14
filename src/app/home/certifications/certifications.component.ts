import { Component, OnInit } from '@angular/core';

interface Certification {
  id?: number;
  name: string;
  dateAchieved: number;
}

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss'],
})
export class CertificationsComponent implements OnInit {
  certifications: Certification[] = [
    {
      name: 'AWS Certified Developer - Associate',
      dateAchieved: Date.parse('02 Jul 2021'),
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
