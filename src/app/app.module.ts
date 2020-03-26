import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Error404Component } from './comps/error404/error404.component';
import { LoginComponent } from './comps/login/login.component';
import { HomeComponent } from './comps/home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AdminModule} from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    AdminModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
