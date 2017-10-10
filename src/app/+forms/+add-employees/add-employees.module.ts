import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FileUploadModule } from 'ng2-file-upload';  //上传文件

import { AddEmployeesComponent } from './add-employees.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import {addEmployeesRouting} from './add-employees-routing.module';
import { RegistrationFormComponent} from './registration-form/registration-form.component';
import {SmartadminModule} from '../../shared/smartadmin.module';
import {CookieService} from 'angular2-cookie/core';
import {CookieStoreService} from '../../shared/cookies/cookie-store.service';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SmartadminModule,
    ReactiveFormsModule,
    addEmployeesRouting,
    // FileUploadModule
  ],
  declarations: [
    AddEmployeesComponent,
    RegistrationFormComponent,
    // KeysPipe
  ],
  providers:[ CookieService,CookieStoreService ]
})
export class AddEmployeesModule { }
