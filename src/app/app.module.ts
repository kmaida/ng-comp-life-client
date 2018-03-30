import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ApiService } from './core/api.service';
import { LoadingComponent } from './core/loading.component';
import { ErrorComponent } from './core/error.component';

import { DinosComponent } from './pages/dinos/dinos.component';
import { HomeComponent } from './pages/home/home.component';
import { StartComponent } from './pages/start/start.component';
import { DinoComponent } from './core/dino/dino.component';
import { AsyncComponent } from './pages/async/async.component';


@NgModule({
  declarations: [
    AppComponent,
    DinosComponent,
    LoadingComponent,
    ErrorComponent,
    HomeComponent,
    StartComponent,
    DinoComponent,
    AsyncComponent
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
