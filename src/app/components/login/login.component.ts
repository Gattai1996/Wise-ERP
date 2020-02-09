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

  constructor(private loginService: LoginService) { 

  }

  ngOnInit() {

  }

   getter() {
    this.loginService.getLogin(this.usuario, this.senha).subscribe(
      (data: Login) => {
        this.login = data;
        console.log('this.login: ' + this.login);  
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


}
