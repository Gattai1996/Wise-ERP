import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material'

@NgModule({
    declarations: [LoginComponent],
    imports: [
        ReactiveFormsModule, 
        RouterModule,
        CommonModule,
        MatButtonModule
    ]
})
export class HomeModule { }