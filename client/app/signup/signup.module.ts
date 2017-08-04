import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { SharedModule } from '../shared/shared.module'

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SignupRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [SignupComponent]
})
export class SignupModule { }
