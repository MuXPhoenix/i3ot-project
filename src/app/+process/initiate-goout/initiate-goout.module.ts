import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InitiateGooutRoutingModule } from './initiate-goout-routing.module';
import { InitiateGooutComponent } from './initiate-goout.component';
import {I3otpModule} from "../../shared/i3otp.module";
import {I3otpEditorsModule} from "../../shared/forms/editors/i3otp-editors.module";

@NgModule({
  imports: [
    CommonModule,
      I3otpModule,
      I3otpEditorsModule,
    InitiateGooutRoutingModule
  ],
  declarations: [InitiateGooutComponent]
})
export class InitiateGooutModule { }
