import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddRequisitionRoutingModule } from './add-requisition-routing.module';
import { AddRequisitionComponent } from './add-requisition.component';
import {I3otpModule} from "../../shared/i3otp.module";
import {I3otpEditorsModule} from "../../shared/forms/editors/i3otp-editors.module";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CookieService} from 'angular2-cookie/core';
import {CookieStoreService} from '../../shared/cookies/cookie-store.service';
import {DpDatePickerModule} from "ng2-date-picker";

@NgModule({
  imports: [
    CommonModule,
      I3otpModule,
      I3otpEditorsModule,
    FormsModule,
    ReactiveFormsModule,
    DpDatePickerModule,
    AddRequisitionRoutingModule
  ],
  declarations: [AddRequisitionComponent],
  providers:[ CookieService,CookieStoreService ]
})
export class AddRequisitionModule { }
