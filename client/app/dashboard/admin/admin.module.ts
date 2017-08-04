import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [
        CommonModule,
        AdminRoutingModule,
        PageHeaderModule,
        SharedModule,
    ],
    declarations: [AdminComponent]
})
export class AdminModule { }
