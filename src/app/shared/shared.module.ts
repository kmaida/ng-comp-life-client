import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading.component';
import { ErrorComponent } from './error.component';
import { DinoComponent } from './dino.component';
import { ApiService } from './api.service';
import { DinoContentOnpushComponent } from './dino-content-onpush/dino-content-onpush.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoadingComponent,
    ErrorComponent,
    DinoComponent,
    DinoContentOnpushComponent
  ],
  exports: [
    LoadingComponent,
    ErrorComponent,
    DinoComponent,
    DinoContentOnpushComponent
  ],
  providers: [
    ApiService
  ]
})
export class SharedModule { }
