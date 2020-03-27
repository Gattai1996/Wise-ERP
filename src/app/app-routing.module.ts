import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GuardRoutesGuard } from './guard-routes/guard-routes.guard';
import { DuplicatesComponent } from './duplicates/duplicates/duplicates.component';
import { InvoicesComponent } from './invoices/invoices.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login', 
    component: LoginComponent 
  },
  {
    path: 'invoices', 
    component: InvoicesComponent,
    canActivate: [GuardRoutesGuard]
  },
  {
    path: 'duplicates',
    component: DuplicatesComponent,
    canActivate: [GuardRoutesGuard]
  },
  {
    path: "**",
    component: NotFoundComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  LoginComponent, 
  InvoicesComponent, 
  DuplicatesComponent, 
  NotFoundComponent
]
