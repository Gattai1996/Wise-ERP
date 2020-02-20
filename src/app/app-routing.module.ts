import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './home/login/login.component';
import { InvoicesComponent } from './invoices/invoices.component';


const routes: Routes = [
  { 
    path: '', 
    component: LoginComponent 
  },
  { 
    path: 'invoices', 
    component: InvoicesComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
