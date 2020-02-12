import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
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
    private loginService: LoginService
    ) {

  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
        user: ['', Validators.required],
        password: ['', Validators.required]
    });

  }

  // fazerLogin() {
  
  //   const usuario = this.loginForm.get('user').value;
  //   const senha = this.loginForm.get('password').value;

  //   this.loginService.autenticar(senha, usuario)
  //     .subscribe(
  //       () => 
  //         console.log('Estou autenticado'),
  //       err => {
  //         console.log('ERRO: ' + err);
  //         this.loginForm.reset();
  //         alert('Usuário incorreto ou senha incorreta!')
  //       });

  // }

  getter() {
    const usuario = this.loginForm.get('user').value;
    const senha = this.loginForm.get('password').value;

    this.loginService.autenticar(usuario, senha).subscribe(
      (login: Login) => {
        this.login = login;
        console.log('Se inscreveu com sucesso!');  
      }, 
      (error: any) => {
        alert('Usuário e/ou senha inválidos!');
        this.erro = error;
        console.log('Deu erro ao tentar se inscrever!');
      });
      
  }

  onSubmit() {

    this.getter();

    // if(this.login[0].ok == true) {
    //   console.log('LOGIN OK === TRUE');
    // }

  }

}
