import {
  NgModule
} from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';

import {
  AppSkyModule
} from './app-sky.module';
import { EmployeeService } from './employee-service';


@NgModule({
  exports: [
    AppSkyModule,
    AgGridModule,
  ],
  imports:[
    AgGridModule.withComponents([])
  ],
  providers: [EmployeeService]
})
export class AppExtrasModule { }
