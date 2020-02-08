import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: string;
  senha: string;
  login: Login;
  erro: any;

  constructor(private loginService: LoginService) { 

  }

  ngOnInit() {

  }

  getter() {
    this.loginService.getLogin(this.usuario, this.senha).subscribe(
      (data: Login) => {
        this.login = data;
      }, 
      (error: any) => {
        this.erro = error;
      });
  }

  onSubmit() {
    
    this.getter();

  }

  obtemSenha(senha: string) {
    this.senha = senha;
  }

}
