import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatMenuModule,
  MatSelectModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule
} from '@angular/material';

const MeterialComponents =
[
  MatButtonModule,
  MatMenuModule,
  MatSelectModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule
];

@NgModule({
  imports: [MeterialComponents],
  exports: [MeterialComponents]
})
export class MaterialModule { }
