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
<<<<<<< Updated upstream
=======
import { ClientesComponent } from './clientes/clientes/clientes.component';
import { SidenavbarComponent } from './sidenavbar/sidenavbar/sidenavbar.component';
>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
    InvoicesComponent,
    DialogErrorComponent,
<<<<<<< Updated upstream
    DataTableComponent
=======
    DataTableComponent,
    ClientesComponent,
    SidenavbarComponent
>>>>>>> Stashed changes
  ],
  entryComponents: [DialogErrorComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    HttpClient,
    LoginService,
    BrandsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
