import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StartComponent } from './pages/start/start.component';
import { AsyncComponent } from './pages/async/async.component';
import { AfterviewinitComponent } from './pages/afterviewinit/afterviewinit.component';
import { FinalComponent } from './pages/final/final.component';
import { TargetlinksComponent } from './pages/targetlinks/targetlinks.component';

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
    path: 'final',
    component: FinalComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
