import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';

import { HomeComponent } from './pages/00-home/home.component';
import { StartComponent } from './pages/01-start/start.component';
import { AsyncComponent } from './pages/02-async/async.component';
import { TargetlinksComponent } from './pages/03-targetlinks/targetlinks.component';
import { AfterviewinitComponent } from './pages/04-afterviewinit/afterviewinit.component';
import { McpComponent } from './pages/05-mcp/mcp.component';
import { DinoContentComponent } from './pages/05-mcp/dino-content/dino-content.component';
import { OnpushComponent } from './pages/06-onpush/onpush.component';
import { DinoContentOnpushComponent } from './pages/06-onpush/dino-content-onpush/dino-content-onpush.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StartComponent,
    AfterviewinitComponent,
    AsyncComponent,
    McpComponent,
    TargetlinksComponent,
    DinoContentComponent,
    OnpushComponent,
    DinoContentOnpushComponent
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
