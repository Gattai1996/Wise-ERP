import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginService } from './services/login.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { BrandsService } from './services/brands.service';
import { DialogErrorComponent } from './dialog-error/dialog-error.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ReplacePipe } from './pipes/replacepipe';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { NotFoundComponent } from './not-found/not-found.component';
import { GuardRoutesGuard } from './guard-routes/guard-routes.guard';
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';
import { routingComponents } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogErrorComponent,
    ReplacePipe,
    NotFoundComponent,
    LoadingIndicatorComponent,
    routingComponents,
    DashboardComponent
  ],
  entryComponents: [DialogErrorComponent, LoadingIndicatorComponent],
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
