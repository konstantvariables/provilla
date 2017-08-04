import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
//import { TranslateModule } from '@ngx-translate/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
// import { AboutComponent, AccountComponent, AdminComponent, JobsComponent } from './';
import { SharedModule, LoadingComponent } from '../shared';

@NgModule({
    imports: [
        SharedModule,
        CommonModule,
        NgbDropdownModule.forRoot(),
        DashboardRoutingModule,
        //TranslateModule,
    ],
    declarations: [
        DashboardComponent,
        //HeaderComponent,
        //SidebarComponent,
        // AboutComponent,
        // AccountComponent,
        // AdminComponent,
        // JobsComponent
    ]
})
export class DashboardModule { }
