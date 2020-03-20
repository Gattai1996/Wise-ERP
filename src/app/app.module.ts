import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginService } from './services/login.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InvoicesComponent } from './invoices/invoices.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { BrandsService } from './services/brands.service';
import { DialogErrorComponent } from './login/dialog-error/dialog-error.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ReplacePipe } from './pipes/replacepipe';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { NotFoundComponent } from './not-found/not/found/not-found.component';
import { GuardRoutesGuard } from './guard-routes/guard-routes.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InvoicesComponent,
    DialogErrorComponent,
    SidenavComponent,
    ReplacePipe,
    NotFoundComponent
  ],
  entryComponents: [DialogErrorComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    CommonModule,
    MaterialModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    ScrollingModule
  ],
  providers: [
    HttpClient,
    LoginService,
    BrandsService,
    GuardRoutesGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
