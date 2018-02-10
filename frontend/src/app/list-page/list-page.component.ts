import { Component, OnInit } from '@angular/core';
import { IssueService } from '../issue.service';
import { Issue } from '../issue.model';

@Component({
  selector: 'tsnt-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {

  issues: Issue[] = [];

  constructor(
    private service: IssueService
  ) { }

  ngOnInit() {
    this.service.getIssues()
      .first()
      .subscribe(issues => this.issues = issues);
  }

}
