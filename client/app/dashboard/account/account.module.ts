import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [
        CommonModule,
        AccountRoutingModule,
        PageHeaderModule,
        SharedModule
    ],
    declarations: [AccountComponent]
})
export class AccountModule { }
