import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AddCustomerComponent } from './add-customer.component';
import {SmartadminModule} from '../../shared/smartadmin.module';
import {addCustomerRouting} from './add-customer-routing.module';
import {SmartadminEditorsModule} from '../../shared/forms/editors/smartadmin-editors.module';

@NgModule({
  imports: [
    CommonModule,
    SmartadminModule,
    SmartadminEditorsModule,
    addCustomerRouting
  ],
  declarations: [AddCustomerComponent]
})
export class AddCustomerModule { }