import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms'

@NgModule({
    declarations: [LoginComponent],
    imports: [ReactiveFormsModule]
})
export class HomeModule {

    // loginForm: FormGroup;

    // constructor(private formBuilder: FormBuilder) {

    // }

    // ngOnInit(): void {
    //     this.loginForm = this.formBuilder.group({
    //         user: ['TESTE'],
    //         password: ['TESTE']
    //     });
    // }

}