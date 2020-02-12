import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { LoginService } from './services/login.service';
import { FormsModule } from '@angular/forms';
import { InvoicesComponent } from './invoices/invoices.component';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    BrowserAnimationsModule,
    InvoicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    FormsModule
  ],
  providers: [
    HttpClient,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
