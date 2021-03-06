import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error500RoutingModule } from './error500-routing.module';
import { Error500Component } from './error500.component';
import {I3otpLayoutModule} from "../../shared/layout/layout.module";
import {StatsModule} from "../../shared/stats/stats.module";

@NgModule({
  imports: [
    CommonModule,
    Error500RoutingModule,


    I3otpLayoutModule,
		StatsModule,

  ],
  declarations: [Error500Component]
})
export class Error500Module { }
