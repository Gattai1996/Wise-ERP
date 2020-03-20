import { Component, OnInit } from '@angular/core';

import { Login } from 'src/app/models/login.model';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material'
import { DialogErrorComponent } from './dialog-error/dialog-error.component';

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
        this.login = login;
        this.loginService.EmitirLogin(login);

        // console.log('LOGIN EMITIDO = ' + login.agent_Id)
        
        if (login.ok === true) {
          this.dadosRepres = login;
          localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.'+ login.agent_Id + '.SmjuyXgloA2RUhIlAEetrQwfC0EhBmhu-xOMzyY3Y_Q');
          // console.log('LOGIN DADOSREPRES= ' + this.dadosRepres.agent_name + this.dadosRepres.agent_Id);
          this.router.navigate(['/invoices']);
        } else {
          this.openDialog();
        }
      },
      (error: any) => {
        this.erro = error;
        this.openDialog();
        console.log('Deu erro ao tentar se inscrever!');
      });
  }

  openDialog() {
    this.dialog.open(DialogErrorComponent);
  }

  onSubmit() {
    this.fazerLogin();
  }

}
