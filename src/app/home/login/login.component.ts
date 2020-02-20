import { CommonModule } from '@angular/common';  
import { Component, OnInit } from '@angular/core';

import { Login } from 'src/app/models/login.model';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login = new Login();
  erro: any;

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router) {}
    
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
        user: ['', Validators.required],
        password: ['', Validators.required]
    });

  }

  getter() {
    const usuario = this.loginForm.get('user').value;
    const senha = this.loginForm.get('password').value;

    this.loginService.autenticar(usuario, senha).subscribe(
      (login: Login) => {
        this.login = login;
        console.log(this.login);
        console.log('GET com sucesso, validando...');  
        if(login.ok == true) {
          console.log('Login validado com sucesso');
          this.router.navigate(['/invoices']);
        } else {
          console.log('Login inválido');
          alert('Usuário ou senha incorreta!')
        }
      },
      (error: any) => {
        this.erro = error;
        alert('Usuário ou senha incorreta!')
        console.log('Deu erro ao tentar se inscrever!');
      });
      
  }

  onSubmit() {
    this.getter();
  }

}
