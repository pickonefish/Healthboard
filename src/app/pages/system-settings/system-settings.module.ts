import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemSettingsRoutingModule } from './system-settings-routing.module';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { SystemSettingsComponent } from './system-settings.component';
import { ThemeModule } from '../../@theme/theme.module';
import { ChangePasswordComponent } from './change-password/change-password.component';

const components = [
  ManageUserComponent,
  ChangePasswordComponent,
  SystemSettingsComponent,
];
@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    SystemSettingsRoutingModule
  ],
  declarations: [
    ...components,
  ],
})
export class SystemSettingsModule { }
