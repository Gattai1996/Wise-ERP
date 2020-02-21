import { NgModule } from '@angular/core';

import { 
  MatButtonModule,
  MatMenuModule,
  MatSelectModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatDialogModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule
} from '@angular/material'

const MeterialComponents = [
  MatButtonModule,
  MatMenuModule,
  MatSelectModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatDialogModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule
]

@NgModule({
  imports: [MeterialComponents],
  exports: [MeterialComponents]
})
export class MaterialModule { }
