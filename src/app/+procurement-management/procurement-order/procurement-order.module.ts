import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcurementOrderRoutingModule } from './procurement-order-routing.module';
import { ProcurementOrderComponent } from './procurement-order.component';
import {I3otpModule} from "../../shared/i3otp.module";
import {I3otpEditorsModule} from "../../shared/forms/editors/i3otp-editors.module";

@NgModule({
  imports: [
    CommonModule,
      I3otpModule,
      I3otpEditorsModule,
    ProcurementOrderRoutingModule
  ],
  declarations: [ProcurementOrderComponent]
})
export class ProcurementOrderModule { }
