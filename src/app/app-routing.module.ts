import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DinosComponent } from './pages/dinos/dinos.component';

const routes: Routes = [
  {
    path: '',
    component: DinosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
