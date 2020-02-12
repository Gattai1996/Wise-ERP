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

  // usuario: string;
  // senha: string;
  // login: Login = new Login();
  // erro: any;

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

  fazerLogin() {
  
    const usuario = this.loginForm.get('user').value;
    const senha = this.loginForm.get('password').value;

    this.loginService.autenticar(senha, usuario)
      .subscribe(
        () => 
          console.log('Estou autenticado'),
        err => {
          console.log('ERRO: ' + err);
          this.loginForm.reset();
        });
  }

  // constructor(private loginService: LoginService, private router: Router) { 
    
  // }

  // ngOnInit() {

  // }

  //  getter() {
  //   this.loginService.getLogin(this.usuario, this.senha).subscribe(
  //     (data: Login) => {
  //       this.login = data;
  //       console.log('this.login: ' + this.login);  
  //     }, 
  //     (error: any) => {
  //       this.erro = error;
  //       console.log('ERRO: ' + this.erro);
  //     });

      
  // }

  // onSubmit() {
  //   this.getter();

  //   if(this.login[0].ok === true) {
  //     console.log('LOGIN OK === TRUE');
  //     this.router.navigate(['/invoices']);
  //   }

  // }

  // obtemSenha(senha: string) {
  //   this.senha = senha;
  // }

}
