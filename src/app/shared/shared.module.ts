import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading.component';
import { ErrorComponent } from './error.component';
import { DinoComponent } from './dino.component';
import { DataService } from './data.service';
import { DinoContentOnpushComponent } from './dino-content-onpush/dino-content-onpush.component';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoadingComponent,
    ErrorComponent,
    DinoComponent,
    DinoContentOnpushComponent,
    HighlightDirective
  ],
  exports: [
    LoadingComponent,
    ErrorComponent,
    DinoComponent,
    DinoContentOnpushComponent,
    HighlightDirective
  ],
  providers: [
    DataService
  ]
})
export class SharedModule { }
