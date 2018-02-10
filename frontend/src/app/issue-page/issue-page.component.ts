import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IssueService } from '../issue.service';
import { Issue, Comment } from '../issue.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'tsnt-issue-page',
  templateUrl: './issue-page.component.html',
  styleUrls: ['./issue-page.component.scss']
})
export class IssuePageComponent implements OnInit {

  issue: Issue;
  comments: Comment[];

  constructor(
    private service: IssueService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap
      .map(paramMap => paramMap.get("id"))
      .filter(id => !!id)
      .switchMap(id => Observable.merge(
        this.service.getIssues()
          .map(issues => issues.find(issue => issue.id === id))
          .filter(issue => !!issue)
          .do(issue => this.issue = issue),
        this.service.getComments(id)
          .do(comments => this.comments = comments)
      ))
      .subscribe();
  }

  get commentLabel() {
    return this.issue.commentCount === 1
      ? "comment"
      : "comments";
  }

}
