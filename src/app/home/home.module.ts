import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'
import { MaterialModule } from '../material/material.module';

@NgModule({
    declarations: [LoginComponent],
    imports: [
        ReactiveFormsModule, 
        RouterModule,
        CommonModule,
        MaterialModule
    ]
})

export class HomeModule { };