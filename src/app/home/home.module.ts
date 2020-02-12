import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [LoginComponent],
    imports: [
        ReactiveFormsModule, 
        RouterModule,
        CommonModule
    ]
})
export class HomeModule { }