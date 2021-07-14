import { Component, OnInit } from '@angular/core';

interface TechnologyGroup {
  groupName: string;
  technologyNames: string[];
}

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss'],
})
export class TechnologiesComponent implements OnInit {
  currentTechnologyGroups: TechnologyGroup[] = [
    {
      groupName: 'Front-end',
      technologyNames: ['Angular 6-12', 'Tailwind CSS', 'TypeScript 3+'],
    },
    {
      groupName: 'Back-end (REST API)',
      technologyNames: [
        'NodeJS',
        'Sequelize 5+',
        'Golang',
        'Python',
        'AWS SDK',
      ],
    },
    {
      groupName: 'Databases',
      technologyNames: ['Postgres', 'AWS RDS (PostgreSQL)'],
    },
    {
      groupName: 'Infrastructure',
      technologyNames: [
        'Jenkins',
        'Terraform',
        'AWS API Gateway',
        'AWS Lambda',
      ],
    },
  ];

  pastTechnologyGroups: TechnologyGroup[] = [
    {
      groupName: 'Front-end',
      technologyNames: ['ES6'],
    },
    {
      groupName: 'Back-end (REST API)',
      technologyNames: ['Java - Spring 3-4', 'Java - Hibernate 3-4'],
    },
    {
      groupName: 'Databases',
      technologyNames: [
        'MongoDB',
        'Solr 6-7',
        'Elasticsearch 6-7',
        'Hive',
        'HDFS',
      ],
    },
    {
      groupName: 'ML/AI',
      technologyNames: ['Jupyter Notebook', 'PyTorch', 'Apache Spark 1.6, 2+'],
    },
    {
      groupName: 'Infrastructure',
      technologyNames: ['Hadoop', 'GitLab CI/CD'],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
