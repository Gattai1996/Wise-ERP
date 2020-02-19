import { NgModule } from '@angular/core';

import { 
  MatButtonModule,
  MatMenuModule,
  MatSelectModule,
  MatTableModule
} from '@angular/material'

const MeterialComponents = [
  MatButtonModule,
  MatMenuModule,
  MatSelectModule,
  MatTableModule
]

@NgModule({
  imports: [MeterialComponents],
  exports: [MeterialComponents]
})
export class MaterialModule { }
