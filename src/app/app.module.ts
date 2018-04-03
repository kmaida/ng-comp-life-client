import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';

import { AfterviewinitComponent } from './pages/afterviewinit/afterviewinit.component';
import { HomeComponent } from './pages/home/home.component';
import { StartComponent } from './pages/start/start.component';
import { AsyncComponent } from './pages/async/async.component';
import { FinalComponent } from './pages/final/final.component';
import { TargetlinksComponent } from './pages/targetlinks/targetlinks.component';
import { DinoContentComponent } from './pages/final/dino-content/dino-content.component';


@NgModule({
  declarations: [
    AppComponent,
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
    SharedModule,
    AppRoutingModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
