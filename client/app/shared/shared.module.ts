import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TranslateModule } from '@ngx-translate/core';
import { Routes, RouterModule } from '@angular/router';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { HeaderComponent, SidebarComponent, LoadingComponent, ToastComponent, SharedPipesModule } from '../shared';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    TranslateModule,
    SharedPipesModule.forRoot(),
    NgbDropdownModule.forRoot()
  ],
  exports: [
    // Shared Modules
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    SharedPipesModule,
    // Shared Components
    LoadingComponent,
    ToastComponent,
    HeaderComponent,
    SidebarComponent,
  ],
  declarations: [
    LoadingComponent,
    ToastComponent,
    HeaderComponent,
    SidebarComponent,
  ],
  providers: [
    ToastComponent,
    NgbDropdownConfig,
  ]
})
export class SharedModule { }
