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
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatGridListModule,
  MatCardModule,
  MatToolbarModule,
  MatAutocompleteModule,
  MatProgressSpinnerModule,
  MatSlideToggleModule
  
} from '@angular/material'


const MeterialComponents =
[
  MatButtonModule,
  MatMenuModule,
  MatSelectModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatDialogModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatGridListModule,
  MatCardModule,
  MatGridListModule,
  MatToolbarModule,
  MatAutocompleteModule,
  MatProgressSpinnerModule,
  MatSlideToggleModule
]

@NgModule({
  imports: [MeterialComponents],
  exports: [MeterialComponents]
})
export class MaterialModule { }
