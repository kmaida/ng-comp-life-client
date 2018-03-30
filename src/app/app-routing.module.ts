import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DinosComponent } from './pages/dinos/dinos.component';
import { StartComponent } from './pages/start/start.component';
import { AsyncComponent } from './pages/async/async.component';

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
    path: 'final',
    component: DinosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
