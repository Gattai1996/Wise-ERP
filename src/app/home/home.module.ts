import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms'
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [LoginComponent],
    imports: [ReactiveFormsModule, CommonModule]
})
export class HomeModule { }