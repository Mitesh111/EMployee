import { HttpClientModule } from '@angular/common/http';
import {
  NgModule
} from '@angular/core';

import {
  SkyAvatarModule
} from '@skyux/avatar';

import {
  SkyAlertModule,
  SkyKeyInfoModule,
  SkyStatusIndicatorModule} from '@skyux/indicators';

import {
  SkyFluidGridModule
} from '@skyux/layout';
import {
  SkyGridModule
} from '@skyux/grids';
import { SkyNavbarModule } from '@skyux/navbar';
import { SkyAgGridModule, SkyAgGridService } from '@skyux/ag-grid';
import { SkyInputBoxModule } from '@skyux/forms';
import { SkyPhoneFieldModule } from '@skyux/phone-field';
import { SkyEmailValidationModule } from '@skyux/validation';
import { SkyDatepickerModule } from '@skyux/datetime';

@NgModule({
  exports: [
    SkyAvatarModule,
    SkyAlertModule,
    SkyKeyInfoModule,
    SkyFluidGridModule,
    SkyNavbarModule,
    HttpClientModule,
    SkyGridModule,
    SkyAgGridModule,
    SkyInputBoxModule,
    SkyStatusIndicatorModule,
    SkyPhoneFieldModule,
    SkyEmailValidationModule,
    SkyDatepickerModule
  ],
  providers:[SkyAgGridService]
})
export class AppSkyModule { }
