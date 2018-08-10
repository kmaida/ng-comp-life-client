import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/00-home/home.component';
import { StartComponent } from './pages/01-start/start.component';
import { AsyncComponent } from './pages/02-async/async.component';
import { TargetlinksComponent } from './pages/03-targetlinks/targetlinks.component';
import { AfterviewinitComponent } from './pages/04-afterviewinit/afterviewinit.component';
import { McpComponent } from './pages/05-mcp/mcp.component';
import { OnpushComponent } from './pages/06-onpush/onpush.component';
import { OnpushRefsComponent } from './pages/07-onpush-refs/onpush-refs.component';
import { UpdatesComponent } from './pages/09-updates/updates.component';
import { DocheckComponent } from './pages/08-docheck/docheck.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'start',
    component: StartComponent
  },
  {
    path: 'async',
    component: AsyncComponent
  },
  {
    path: 'targetlinks',
    component: TargetlinksComponent
  },
  {
    path: 'afterviewinit',
    component: AfterviewinitComponent
  },
  {
    path: 'mcp',
    component: McpComponent
  },
  {
    path: 'onpush',
    component: OnpushComponent
  },
  {
    path: 'onpush-refs',
    component: OnpushRefsComponent
  },
  {
    path: 'docheck',
    component: DocheckComponent
  },
  {
    path: 'updates',
    component: UpdatesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
