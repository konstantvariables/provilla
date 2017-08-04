import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AuthGuardAdmin } from '../services/auth-guard-admin.service';

const routes: Routes = [
    {
        path: '', component: DashboardComponent,
        children: [
            { path: 'about', loadChildren: './about/about.module#AboutModule' },
            { path: 'account', loadChildren: './account/account.module#AccountModule' },
            { path: 'jobs', loadChildren: './jobs/jobs.module#JobsModule' },
            { path: 'users', loadChildren: './admin/admin.module#AdminModule', canActivate: [AuthGuardAdmin] },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }
