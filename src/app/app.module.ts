import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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
import { OnpushRefsComponent } from './pages/07-onpush-refs/onpush-refs.component';
import { DocheckComponent } from './pages/08-docheck/docheck.component';
import { UpdatesComponent } from './pages/09-updates/updates.component';
import { DinoContentFavComponent } from './pages/09-updates/dino-content-fav/dino-content-fav.component';
import { DinoContentDocheckComponent } from './pages/08-docheck/dino-content-docheck/dino-content-docheck.component';


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
    OnpushRefsComponent,
    DocheckComponent,
    DinoContentDocheckComponent,
    UpdatesComponent,
    DinoContentFavComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
