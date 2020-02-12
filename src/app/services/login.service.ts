import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Login } from '../models/login.model';
import { debug } from 'util';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  login: Login = new Login();
  SEARCH_URL = `https://wiseapi-compuwise.azurewebsites.net/service.asmx/login`;
  PARAMETERS = `?brand_Id=58&collection_Id=4&company_Id=1&dept_Id=1`;

  constructor(private http: HttpClient) { }

  public getLogin(usuario: string, senha: string): Observable<Login> {
    console.log(this.SEARCH_URL + this.PARAMETERS + `&password=` + senha + `&user=` + usuario);
    return this.http.get<Login>(
      this.SEARCH_URL + this.PARAMETERS + `&password=` + senha + `&user=` + usuario
      );
  }

}
