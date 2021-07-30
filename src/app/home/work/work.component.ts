import { Component } from '@angular/core';

interface WorkHistory {
  jobTitle: string;
  companyName: string;
  location: string;
  startDate: string;
  endDate: string;
  jobDescription: string;
  responsibilities: string[];
  color: string;
}

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
})
export class WorkComponent {
  workHistories: WorkHistory[] = [
    {
      jobTitle: 'Software Engineering Sr. Advisor',
      companyName: 'Cigna/Evernorth Health Services',
      location: 'Denver, CO & Remote',
      startDate: 'Feb 2019',
      endDate: 'Now',
      jobDescription:
        'At Cigna+Evernorth, I develop platforms intersecting insurance and finance.',
      responsibilities: [
        'Enhance a platform enabling users to analyze financial trends in insurance claims.',
        'Develop tools and dashboard widgets for generating and exporting financial reports.',
      ],
      color: 'bg-blizzard-blue',
    },
    {
      jobTitle: 'Principal',
      companyName: 'Eloquia Technologies',
      location: 'Remote',
      startDate: 'Aug 2020',
      endDate: 'Now',
      jobDescription:
        'Founder of Eloquia Technologies, a consulting company dedicated to changing lives through innovative solutions.',
      responsibilities: [
        'Build external websites, admin dashboards, and project management software,',
        'Mentor budding student interns on industry-standards for cutting-edge academic research.',
        'Design solutions to help lab researchers become more effective at managing diverse workloads.',
      ],
      color: 'bg-sky-blue-crayola',
    },
    {
      jobTitle: 'Data Engineer',
      companyName: 'Leidos - Various Government Agencies',
      location: 'Gaithersburg, MD',
      startDate: 'Apr 2018',
      endDate: 'Jan 2019',
      jobDescription:
        'I worked on a project called CAADS--Collaborative Analytics and Data Sharing. It is a big data platform for enabling researchers and data analysts to find actionable insights in their ocean of data.',
      responsibilities: [
        'Develop ETL pipelines for cleaninng and transforming a variety of client data',
        "Design solutions to enhance the platform to solve clients' problems",
        'Create dashboards and graph widgets for summary and drill-down capabilities',
      ],
      color: 'bg-cerulean-crayola',
    },
    {
      jobTitle: 'Software Engineer & NLP Analyst',
      companyName: 'Department of Justice',
      location: 'Washington DC',
      startDate: 'Feb 2016',
      endDate: 'Mar 2018',
      jobDescription:
        'COBRA is an open-source e-discovery platform for government agencies with civil litigation.',
      responsibilities: [
        'Lead a team of diverse engineers in developing various back-end features',
        'Architected a human-in-the-loop machine learning module for classifying text documents',
        'Designed a system for auditing role-based changes',
      ],
      color: 'bg-blizzard-blue',
    },
  ];

  constructor() {}
}
