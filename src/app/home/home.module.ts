import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';

@NgModule({
    declarations: [],
    imports: [
        ReactiveFormsModule,
        RouterModule,
        CommonModule,
        MaterialModule
    ]
})

export class HomeModule { }
