import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingFormworkRoutingModule } from './setting-formwork-routing.module';
import { SettingFormworkComponent } from './setting-formwork.component';
import {I3otpEditorsModule} from "../../shared/forms/editors/i3otp-editors.module";
import {I3otpModule} from "../../shared/i3otp.module";

@NgModule({
  imports: [
    CommonModule,
      I3otpEditorsModule,
      I3otpModule,
    SettingFormworkRoutingModule
  ],
  declarations: [SettingFormworkComponent]
})
export class SettingFormworkModule { }
