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
  SEARCH_URL: string = `https://wiseapi-compuwise.azurewebsites.net/service.asmx/login`;
  PARAMETERS: string = `?brand_Id=58&collection_Id=4&company_Id=1&dept_Id=1`;

  constructor(private http: HttpClient) { }

  public getLogin(usuario: string, senha: string):Observable<any> {
    console.log(this.SEARCH_URL + this.PARAMETERS + `&password=` + senha + `&user=` + usuario); 
    return this.http.get(
      this.SEARCH_URL + this.PARAMETERS + `&password=` + senha + `&user=` + usuario
      );
      
  }

}
