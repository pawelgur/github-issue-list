import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Issue, Comment, IssueStatus } from './issue.model';

@Injectable()
export class IssueService {

  constructor() { }

  getIssues(): Observable<Issue[]> {
    return Observable.of([{
        title: "Something went wrong",
        id: "123",
        opened: "3 years ago",
        author: "some_user",
        commentCount: 5,
        tags: ["bug"],
        status: IssueStatus.open
      }, {
        title: "Something went wrong",
        id: "123",
        opened: "3 years ago",
        author: "some_user",
        commentCount: 5,
        tags: ["bug"],
        status: IssueStatus.open
      }, {
        title: "Something went wrong",
        id: "123",
        opened: "3 years ago",
        author: "some_user",
        commentCount: 5,
        tags: ["bug"],
        status: IssueStatus.open
      }, {
        title: "Something went wrong",
        id: "123",
        opened: "3 years ago",
        author: "some_user",
        commentCount: 5,
        tags: ["bug"],
        status: IssueStatus.open
      }
    ])
      .delay(500); // simulate fetching
  }

  getComments(issueId: string): Observable<Comment[]> {
    return Observable.of([
      {
        author: "some_user",
        date: "3 days ago",
        content: `
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consequat neque eu volutpat lacinia. 
          Quisque sed mollis nisl, quis bibendum lectus. Curabitur vel dignissim elit, eu pulvinar arcu. 
          Nulla feugiat venenatis odio in condimentum. Nullam sed aliquet neque. Pellentesque ut orci pharetra, tempus nibh a, sollicitudin ligula. 
          Aliquam facilisis volutpat maximus. Vivamus tempor, velit id commodo tristique, quam eros elementum turpis, ultrices vehicula sapien augue ac nulla. 
          Nullam tempus, felis non iaculis tempor, libero arcu hendrerit ligula, quis maximus purus magna eu augue. Etiam vel condimentum lectus.
        `
      }
    ])
      .delay(1000); // simulate fetching
  }

}
