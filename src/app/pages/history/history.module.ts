import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryRoutingModule } from './history-routing.module';
import { HistoryComponent } from './history.component';
import { IndexComponent } from './index/index.component';
import { ConditionListComponent } from './condition-list/condition-list.component';
import { ProcedureListComponent } from './procedure-list/procedure-list.component';
import { ThemeModule } from '../../@theme/theme.module';
import {
  DxDataGridModule,
  DxDateBoxModule,
  DxLoadPanelModule,
  DxNumberBoxModule,
  DxPopupModule,
  DxScrollViewModule,
  DxTextBoxModule,
  DxToolbarModule,
} from 'devextreme-angular';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    DxTextBoxModule,
    DxNumberBoxModule,
    DxDateBoxModule,
    DxToolbarModule,
    DxDataGridModule,
    DxScrollViewModule,
    DxPopupModule,
    DxLoadPanelModule,
    HistoryRoutingModule,
  ],
  declarations: [HistoryComponent, IndexComponent, ConditionListComponent, ProcedureListComponent],
})
export class HistoryModule { }
