import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import { SharedModule } from '../../shared/shared.module';
import { JobsRoutingModule } from './jobs-routing.module';
import { JobsComponent } from './jobs.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [
        NgbModule.forRoot(),
        CommonModule,
        JobsRoutingModule,
        PageHeaderModule,
        SharedModule,
    ],
    declarations: [JobsComponent],
    providers:[NgbRatingConfig, NgbModal]
})
export class JobsModule {



}
