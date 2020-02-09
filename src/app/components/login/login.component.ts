import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login.model';
import { LoginService } from 'src/app/services/login.service';
import { AuthService } from 'src/app/services/auth.service';
import { Usuario } from 'src/app/classes/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private usuario: Usuario = new Usuario();
  senha: string;
  login: Login = new Login();
  erro: any;

  constructor(private authService: AuthService) { 

  }

  ngOnInit() {

  }

  //  getter() {
  //   this.loginService.getLogin().subscribe(
  //     (data: Login) => {
  //       this.login = data;
  //       console.log('this.login: '+this.login+ '  ok: '+ data.ok);  
  //     }, 
  //     (error: any) => {
  //       this.erro = error;
  //       console.log(this.erro);
  //     });
  // }
  

  // onSubmit() {
  //   this.getter();
  //   this.fazerLogin(this.login);
  // }

  obtemSenha(senha: string) {
    this.senha = senha;
  }

  public fazerLogin(login: Login) {
    
    //console.log(this.usuario)

    this.authService.fazerLogin(this.usuario);

  }

}
