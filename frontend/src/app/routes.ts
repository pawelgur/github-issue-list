import { Routes } from '@angular/router';
import { ListPageComponent } from './list-page/list-page.component';
import { IssuePageComponent } from './issue-page/issue-page.component';
import { LoginPageComponent } from './login-page/login-page.component';

export const appRoutes: Routes = [
    { path: 'login', component: LoginPageComponent },
    { path: 'issues', component: ListPageComponent },
    { path: 'issues/:pageNr', component: ListPageComponent },
    { path: 'issue/:id', component: IssuePageComponent },
    { path: '',
      redirectTo: 'issues',
      pathMatch: 'full'
    }
    // { path: '**', component: PageNotFoundComponent }
  ];
  