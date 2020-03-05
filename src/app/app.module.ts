import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginService } from './services/login.service';
import { FormsModule } from '@angular/forms';
import { InvoicesComponent } from './invoices/invoices.component';
import { HomeModule } from './home/home.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { BrandsService } from './services/brands.service';
import { DialogErrorComponent } from './home/dialog-error/dialog-error.component';
import { DataTableComponent } from './invoices/table/data-table/data-table.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ClientesComponent } from './clientes/clientes/clientes.component';
import { SidenavbarComponent } from './sidenavbar/sidenavbar/sidenavbar.component';
import { ReplacePipe } from './pipes/replacepipe';

@NgModule({
  declarations: [
    AppComponent,
    InvoicesComponent,
    DialogErrorComponent,
    DataTableComponent,
    ClientesComponent,
    SidenavbarComponent,
    SidenavComponent,
    ReplacePipe
  ],
  entryComponents: [DialogErrorComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [
    HttpClient,
    LoginService,
    BrandsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
