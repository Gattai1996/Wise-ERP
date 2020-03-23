import { Component, OnInit } from '@angular/core';

import { Login } from 'src/app/models/login.model';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material'
import { DialogErrorComponent } from './dialog-error/dialog-error.component';
import { LoadingIndicatorComponent } from '../loading-indicator/loading-indicator.component';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login = new Login();
  erro: any;
  public dadosRepres: Login;

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private dialog: MatDialog
    ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
        user: ['', Validators.required],
        password: ['', Validators.required]
    });
  }

  fazerLogin() {

    const usuario = this.loginForm.get('user').value;
    const senha = this.loginForm.get('password').value;

    this.loginService.autenticar(usuario, senha).subscribe(
      (login: Login) => {
        this.openLoadingDialog();
        this.login = login;
        this.loginService.EmitirLogin(login);        
        if (login.ok === true) {
          this.dadosRepres = login;
          localStorage.setItem('token', login.agent_Id);
          this.router.navigate(['/invoices']);
        } else {
          this.openErrorDialog();
        }
        this.closeLoadingDialog();
      },
      (error: any) => {
        this.erro = error;
        this.closeLoadingDialog();
        this.openErrorDialog();
      });
  }

  openErrorDialog() {
    this.dialog.open(DialogErrorComponent);
  }

  openLoadingDialog() {
    this.dialog.open(LoadingIndicatorComponent);
  }

  closeLoadingDialog() {
    this.dialog.closeAll();
  }

  onSubmit() {
    this.fazerLogin();
  }

}
