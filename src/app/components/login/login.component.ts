import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login.model';
import { LoginService } from 'src/app/services/login.service';
import { Usuario } from 'src/app/classes/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: string;
  senha: string;
  login: Login = new Login();
  erro: any;
  ok: boolean;

  constructor(private loginService: LoginService) {
    this.ok = false;
  }

  ngOnInit() {
  }

   getter() {
    this.loginService.getLogin(this.usuario, this.senha).subscribe(
      (data: Login) => {
        this.login = data;
        console.log(this.login);
      },
      (error: any) => {
        this.erro = error;
        console.log(this.erro);
      });
  }

  onSubmit() {
    this.getter();
  }

  obtemSenha(senha: string) {
    this.senha = senha;
  }

  isLoginOk(): boolean {
    if (this.login[0].ok === undefined) {
      return this.ok;
    } else {
      return this.login[0].ok;
    }
  }

  changeOk() {
    if (this.login[0].ok !== undefined) {
      this.ok = this.login[0].ok;
    }
    console.log(this.ok);
  }


}
