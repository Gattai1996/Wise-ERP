import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NotFoundComponent } from './not-found/not/found/not-found.component';
import { GuardRoutesGuard } from './guard-routes/guard-routes.guard';

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
    component: SidenavComponent,
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
