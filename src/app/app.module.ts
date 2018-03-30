import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ApiService } from './core/api.service';
import { LoadingComponent } from './core/loading.component';
import { ErrorComponent } from './core/error.component';
import { DinoComponent } from './core/dino/dino.component';

import { AfterviewinitComponent } from './pages/afterviewinit/afterviewinit.component';
import { HomeComponent } from './pages/home/home.component';
import { StartComponent } from './pages/start/start.component';
import { AsyncComponent } from './pages/async/async.component';
import { FinalComponent } from './pages/final/final.component';
import { TargetlinksComponent } from './pages/targetlinks/targetlinks.component';
import { DinoContentComponent } from './pages/final/dino-content.component';


@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    ErrorComponent,
    DinoComponent,
    HomeComponent,
    StartComponent,
    AfterviewinitComponent,
    AsyncComponent,
    FinalComponent,
    TargetlinksComponent,
    DinoContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
