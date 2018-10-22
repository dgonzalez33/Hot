import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ViewToolsPage } from './../view-tools/view-tools.page'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public constructor(public router: Router){}
  public catSelected: Array<boolean> = [false, false, false, false];
  public categories = [
    {
      title: 'AI Tools',
      icon: 'globe',
      description: `Tool and resources, which include versions of search and mathematical
      optimization, artificial neural networks, and methods based on statistics,
      probability and economics.`
    },
    {
      title: 'Automation',
      icon: 'git-compare',
      description: ``
    },
    {
      title: 'API',
      icon: 'git-commit',
      description:  ``
    },
    {
      title: 'Data Management',
      icon: 'cloud-done',
      description: `Tools and resources that includes acquiring, validating, storing, protecting,
      and processing required data to ensure the accessibility, reliability, and
      timeliness of the data for its users.`
    },
    {
      title: 'Developer',
      icon: 'laptop',
      description: `A software development tool and resources for applications programs that
      software designers and developers can use in order to create, maintain,
      debug, or support other applications or programs.`
    },
    {
      title: 'Data Analytics & Visualization',
      icon: 'pie',
      description: `Tools and resources to analyze data and visualize actionable and
      commercially relevant information that can be used to increase results or
      performance.`
    },
    {
      title: 'Productivity & Collaboration',
      icon: 'chatbubbles',
      description: `Tools and resources used for different types of software and
      online services that allow people to work together on common projects,
      regardless of their physical location. It can be something as simple as
      email and as complex as sophisticated project management software.`
    },
    {
      title: 'Project Management',
      icon: 'clipboard',
      description: `Tools and resources aided to assist an individual or team to effectively
      organize work and manage projects and tasks.`
    },
    {
      title: 'Finance',
      icon: 'calculator',
      description: `Tools and resources include ratio analysis, trend analysis,
      comparative financial statement analysis or horizontal analysis, and
      common size statement analysis or vertical analysis, etc.`
    },
    {
      title: 'Network',
      icon: 'git-network',
      description: `Tools and resources to allow easier troubleshooting, administering and
      fixing a network by providing effective support through suites of software
      or functions.`
    },
    {
      title: 'Other',
      icon: 'help',
      description: ``
    }
  ];
  public showInfo(category, row): void {
    this.catSelected = this.catSelected.map(x=>false);
    this.catSelected[row] = category;
  }
  public seeMore(category): void {
    this.router.navigateByUrl('/view-tools/'+category);
  }
}
