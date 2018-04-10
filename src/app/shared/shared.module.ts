import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading.component';
import { ErrorComponent } from './error.component';
import { DinoComponent } from './dino.component';
import { DataService } from './data.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoadingComponent,
    ErrorComponent,
    DinoComponent
  ],
  exports: [
    LoadingComponent,
    ErrorComponent,
    DinoComponent
  ],
  providers: [
    DataService
  ]
})
export class SharedModule { }
