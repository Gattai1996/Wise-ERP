import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './home/login/login.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { ClientesComponent } from './clientes/clientes/clientes.component';

const routes: Routes = [
  { 
    path: '', 
    component: LoginComponent 
  },
  { 
    path: 'invoices', 
    component: InvoicesComponent 
  },
  { 
    path: 'clientes', 
    component: ClientesComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
