import { NgModule } from '@angular/core';

import { 
  MatButtonModule,
  MatMenuModule,
  MatSelectModule
} from '@angular/material'

const MeterialComponents = [
  MatButtonModule,
  MatMenuModule,
  MatSelectModule
]

@NgModule({
  imports: [MeterialComponents],
  exports: [MeterialComponents]
})
export class MaterialModule { }
