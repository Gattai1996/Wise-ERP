import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms'
import { CommonModule } from '@angular/common';
<<<<<<< Updated upstream

@NgModule({
    declarations: [LoginComponent],
    imports: [ReactiveFormsModule, CommonModule]
=======
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
>>>>>>> Stashed changes
})
export class HomeModule { }