import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ListPageComponent } from './list-page/list-page.component';
import { IssuePageComponent } from './issue-page/issue-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { appRoutes } from './routes';
import { IssueService } from './issue.service';

@NgModule({
  declarations: [
    AppComponent,
    ListPageComponent,
    IssuePageComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    IssueService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
