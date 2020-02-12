import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Login } from '../models/login.model';
import { debug } from 'util';

const API_URL = 'https://wiseapi-compuwise.azurewebsites.net/service.asmx/login';
const PARAMETERS = '?brand_Id=58&collection_Id=4&company_Id=1&dept_Id=1';

@Injectable({
  providedIn: 'root'
})
export class LoginService{

  constructor(private httpClient: HttpClient) { }

  autenticar(usuario: String, senha: String) {

    return this.httpClient.post(API_URL + PARAMETERS + `&password=` + senha + `&user=` + usuario, {senha, usuario})

  }

}

// export class LoginService {
//   login: Login = new Login();
//   SEARCH_URL: string = `https://wiseapi-compuwise.azurewebsites.net/service.asmx/login`;
//   PARAMETERS: string = `?brand_Id=58&collection_Id=4&company_Id=1&dept_Id=1`;

//   constructor(private http: HttpClient) { }

//   public getLogin(usuario: string, senha: string):Observable<Login> {
//     console.log(this.SEARCH_URL + this.PARAMETERS + `&password=` + senha + `&user=` + usuario); 
//     return this.http.get<Login>(
//       this.SEARCH_URL + this.PARAMETERS + `&password=` + senha + `&user=` + usuario
//       );
      
//   }
