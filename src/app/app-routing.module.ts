import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/00-home/home.component';
import { StartComponent } from './pages/01-start/start.component';
import { AsyncComponent } from './pages/02-async/async.component';
import { TargetlinksComponent } from './pages/03-targetlinks/targetlinks.component';
import { AfterviewinitComponent } from './pages/04-afterviewinit/afterviewinit.component';
import { McpComponent } from './pages/05-mcp/mcp.component';
import { HooksComponent } from './pages/06-hooks/hooks.component';
import { UpdatesComponent } from './pages/07-updates/updates.component';

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
    path: 'hooks',
    component: HooksComponent
  },
  {
    path: 'updates',
    component: UpdatesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
