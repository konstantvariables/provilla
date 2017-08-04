import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
//import { JobsComponent } from './jobs/jobs.component';
//import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
//import { AccountComponent } from './account/account.component';
//import { AdminComponent } from './admin/admin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuardLogin } from './services/auth-guard-login.service';
import { AuthGuardAdmin } from './services/auth-guard-admin.service';

const routes: Routes = [

  //{ path: 'about', component: AboutComponent },
  //{ path: 'jobs', component: JobsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: '', loadChildren: './dashboard/dashboard.module#DashboardModule', canActivate: [AuthGuardLogin] },
  //{ path: 'account', component: AccountComponent, canActivate: [AuthGuard] },
  //{ path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupModule' },
  //{ path: 'theme', loadChildren: './layout/layout.module#LayoutModule', canActivate: [AuthGuard] },
  { path: 'notfound', component: NotFoundComponent },
  //{ path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
  { path: '**', redirectTo: '/notfound' },
  //{ path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class RoutingModule { }
